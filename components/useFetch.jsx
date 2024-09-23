export default async function GetEntries(){

    try {
        const res = await fetch("https://autoauditpro.com/api/entries/",{
          cache: "no-store",
          method: 'GET'
        })
    
        if(!res.ok){
          throw new Error("Failed to Fetch Entries")
        }
        const data = await res.json()
        return data
      } catch (error) {
        console.log(error)
      }
}