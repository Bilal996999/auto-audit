import React, { useState, useEffect } from 'react';
import {
  Table, TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Button,
  Chip,
  Pagination
} from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { VerticalDotsIcon } from "@/components/VerticalDotsIcon";

const VinTable = () => {
  const [entryData, setEntryData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const getData = () => {
    try {
      fetch("/api/entries/", {
        cache: "no-store",
        method: "GET",
        mode: "no-cors",
      }).then(res => {
        if (!res.ok) { throw new Error('Network response was not ok'); }
        return res.json();
      }).then((data) => setEntryData(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Filter data based on the search term
  const filteredData = entryData?.filter((item) =>
    item.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.vinNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate the filtered data
  const paginatedData = filteredData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil((filteredData?.length || 0) / itemsPerPage);

  const handleStatusUpdate = async (data, newStatus) => {
    try {
      const res = await fetch(`/api/entries/${data._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          newName: data.name,
          newEmail: data.email,
          newPhone: data.phone,
          newVinNumber: data.vinNumber,
          newStatus
        })
      });

      if (!res.ok) {
        throw new Error("Failed to update");
      } else {
        getData();
      }
    } catch (error) {
      console.log("Failed to update data", error);
    }
  };

  return (
    <div>
      <Input
        clearable
        bordered
        placeholder="Type here to search..."
        onChange={handleSearch}
        className='mb-5 max-w-[30%]'
      />
      <Table aria-label="Example table with dynamic content">
        <TableHeader>
          <TableColumn>Invoice Number</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Phone</TableColumn>
          <TableColumn>Vin Number</TableColumn>
          <TableColumn>Date</TableColumn>
          <TableColumn>Time</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {paginatedData?.map((item, index) => (
            <TableRow key={item._id}>
              <TableCell>#{item.invoiceNumber || index}</TableCell>
              <TableCell className='w-[160px]'><strong>{item.name}</strong></TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.vinNumber}</TableCell>
              <TableCell className='w-[110px] text-[13px]'>{(item.createdAt).slice('0', '10')}</TableCell>
              <TableCell>{(item.createdAt).slice('11', '16')}</TableCell>
              <TableCell>
                <Chip
                  className={
                    item.status === "Payment Pending" ? "capitalize bg-slate-200" :
                      item.status === "Payment Received" ? "capitalize bg-green-700 text-white" :
                        item.status === "Report Delivered" ? "capitalize bg-themeColor text-white" : 
                        item.status === "Payment Refunded" ? "capitalize bg-[#0a9a07] text-white" :
                          "capitalize bg-red-700 text-white"
                  }
                  size="sm"
                  variant="flat"
                >
                  {item.status}
                </Chip>
              </TableCell>
              <TableCell>
                <div className="relative flex justify-end items-center gap-2">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button isIconOnly size="sm" variant="light">
                        <VerticalDotsIcon className="text-default-300" />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem onClick={() => handleStatusUpdate(item, "Payment Pending")}>Payment Pending</DropdownItem>
                      <DropdownItem onClick={() => handleStatusUpdate(item, "Payment Received")}>Payment Received</DropdownItem>
                      <DropdownItem onClick={() => handleStatusUpdate(item, "Payment Declined")}>Payment Declined</DropdownItem>
                      <DropdownItem onClick={() => handleStatusUpdate(item, "Report Delivered")}>Report Delivered</DropdownItem>
                      <DropdownItem onClick={() => handleStatusUpdate(item, "Payment Refunded")}>Payment Refunded</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-5">
        <Pagination
          total={totalPages}
          initialPage={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default VinTable;
