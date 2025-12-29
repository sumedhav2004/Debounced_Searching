import { useState } from "react"
import "./App.css"
import AddNewBtn from "./components/components/AddNewBtn"
import NewNoteModal from "./components/components/NewNoteModal"
import "./components/components/NoteSection"
import NoteSection from "./components/components/NoteSection"
import SearchBar from "./components/components/SearchBar"
import NonDebouncedSearchBar from "./components/components/NonDebouncedSearchBar"

function App() {
 const [isModalOpen,setIsModalOpen] = useState(false)
 const hardcodedTitles = ["England", "English", "English Countryside", "EnglandCapital", "KingstonEngland", "London-England","Eng-TestCricket"];

 const allTitles = hardcodedTitles.map((title) =>
           Array.from({ length: 100 }).map((_, i) => {
            return title+i
           })
         ).flat()

  console.log(allTitles)
 

  return (
    <div className="main-container">
      {
        isModalOpen && <NewNoteModal closing={()=>setIsModalOpen(false)} />
      }
      <div className="top-container">
        <SearchBar hardcodedTitles={allTitles} />
        <NonDebouncedSearchBar hardcodedTitles={allTitles} />
        <AddNewBtn onOpen={()=>setIsModalOpen(true)} />
      </div>
      <NoteSection hardcodedTitles={allTitles} />
    </div>
  )
}

export default App
