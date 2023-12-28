import './App.css';
import Header from './components/Header/Header';
import Main from './components/MainComponents/Main/Main';
import Footer from './components/Footer/Footer'
import { createContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import TaskInfo from './components/MainComponents/TaskInfo/TaskInfo';

export const TasksContext = createContext({})

const taskStatusList = ["Backlog", "Ready", "InProgress", "Finished"]

// const MockData = {
//   "Backlog": [
//     {id: 0, title: "Backlog0", description: "Description for Backlog0"},
//     {id: 1, title: "Backlog1", description: "Description for Backlog1"},
//     {id: 2, title: "Backlog2", description: "Description for Backlog2"}
//   ],
//   "Ready": [
//     {id: 0, title: "Ready0", description: "Description for Ready0"},
//     {id: 1, title: "Ready1", description: "Description for Ready1"},
//     {id: 2, title: "Ready2", description: "Description for Ready2"}
//   ],
//   "InProgress": [
//     {id: 0, title: "InProgress0", description: "Description for InProgress0"},
//     {id: 1, title: "InProgress1", description: "Description for InProgress1"},
//     {id: 2, title: "InProgress2", description: "Description for InProgress2"}
//   ],
//   "Finished": [
//     {id: 0, title: "Finished0", description: "Description for Finished0"},
//     {id: 1, title: "Finished1", description: "Description for Finished1"},
//     {id: 2, title: "Finished2", description: "Description for Finished2"}
//   ],
// }

const MockData = {
  "Backlog": [

  ],
  "Ready": [

  ],
  "InProgress": [

  ],
  "Finished": [

  ],
}

let localdata = JSON.parse(localStorage.getItem("localdata"))

if(!localdata) {
  localdata = MockData
}


function App() {
  
  const [data, setData] = useState(localdata)
  const [update, changeUpdate] = useState(false) // Переменная для обновления данных в компонентах (При использовании контекста, данные не обновлются)

  return (
    <div className="App">
      <TasksContext.Provider value={{data, setData}}>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Main update={{update, changeUpdate}}/>}/>
            {taskStatusList.map((status) => {
              return data[status].map((item) => {
                const path = "/" + status + "/" + item.id
                console.log(path)
                return <Route path={path} element={<TaskInfo status={status} item={item} data={data} setData={setData}/>}/>
              })
            })}
          </Routes>
          <Footer />
        </>
      </TasksContext.Provider>
    </div>
  );
}

export default App;
