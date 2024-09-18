import React, { useState, useEffect } from 'react'
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
  Chip
} from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import { VerticalDotsIcon } from "@/components/VerticalDotsIcon";

const data = [
  { id: 1, name: 'Item 1', details: 'Details 1' },
  { id: 2, name: 'Item 2', details: 'Details 2' }
]

const VinTable = () => {
  const [entryData, setEntryData] = useState()
  const [searchTerm, setSearchTerm] = useState('');

  const getData = () =>{
    try {
      fetch("https://auto-audit.vercel.app/api/entries/", {
        cache: "no-store",
        method: "GET"
      }).then(res => {
        if (!res.ok) { throw new Error('Network response was not ok') }
        return res.json()
      }).then((data) => setEntryData(data))


    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {

    getData()

  }, [])

  // { entryData && console.log(entryData) }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = entryData?.filter((item) =>
    item.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdatePending = async(data) =>{
    try {
      const res = await fetch(`https://auto-audit.vercel.app/api/entries/${data._id}`,{
        method: "PUT",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          newName: data.name,
          newEmail: data.Email,
          newPhone: data.phone,
          newVinNumber: data.vinNumber,
          newStatus: "Payment Pending",
        })
      })
      if(!res.ok){
        throw new Error("Failed to update")
      }else{
        getData()
      }
    } catch (error) {
      throw new Error("Failed to update data")
    }
    
  }
  const handleUpdateReceived = async(data) =>{
    try {
      const res = await fetch(`https://auto-audit.vercel.app/api/entries/${data._id}`,{
        method: "PUT",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          newName: data.name,
          newEmail: data.Email,
          newPhone: data.phone,
          newVinNumber: data.vinNumber,
          newStatus: "Payment Received",
        })
      })

      if(!res.ok){
        throw new Error("Failed to update")
      }else{
        getData()
      }
    } catch (error) {
      throw new Error("Failed to update data")
    }
    
  }
  const handleUpdateDeclined = async(data) =>{
    try {
      const res = await fetch(`https://auto-audit.vercel.app/api/entries/${data._id}`,{
        method: "PUT",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          newName: data.name,
          newEmail: data.Email,
          newPhone: data.phone,
          newVinNumber: data.vinNumber,
          newStatus: "Payment Declined",
        })
      })
      if(!res.ok){
        throw new Error("Failed to update")
      }else{
        getData()
      }
    } catch (error) {
      throw new Error("Failed to update data")
    }
    
  }



  return (
    <div>
      <Input
        clearable
        bordered
        placeholder="Search By Invoice Number"
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
          <TableColumn>Status</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {filteredData?.map((item, index) => (
            <TableRow key={item._id}>
              <TableCell>#{item.invoiceNumber || index}</TableCell>
              <TableCell><strong>{item.name}</strong></TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.vinNumber}</TableCell>
              
              <TableCell><Chip className={item.status == "Payment Pending" ? "capitalize bg-slate-200" : item.status == "Payment Received" ? "capitalize bg-green-700" : "capitalize bg-red-700 text-white"} size="sm" variant="flat">{item.status}</Chip></TableCell>
              <TableCell><div className="relative flex justify-end items-center gap-2">
                <Dropdown>
                  <DropdownTrigger>
                    <Button isIconOnly size="sm" variant="light">
                      <VerticalDotsIcon className="text-default-300" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem onClick={()=> handleUpdatePending({...item})}>Payment Pending</DropdownItem>
                    <DropdownItem onClick={()=> handleUpdateReceived({...item})}>Payment Received</DropdownItem>
                    <DropdownItem onClick={()=> handleUpdateDeclined({...item})}>Payment Declined</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )


}

export default VinTable