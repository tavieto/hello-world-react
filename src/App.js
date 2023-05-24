import React, { Component, useEffect, useState } from "react";
import axios from "axios";

function App() {
  return (
    <>
    <ListSample />
    </>
  );
}

function ListSample() {
  const endpoint = "https://api.thedogapi.com/v1/"
  const url = endpoint + "breeds?limit=20&page=0"
  const apiKey = "live_zVnYqYeKc3v94B5DDFmsrzd2hx6J2HFDa8w7mtvIp52jI2d5I6gAO1g9QDt5dS44"
  const [data, setData] = useState([])

  useEffect( () => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url, { 
            headers: {
              'x-api-key': apiKey
            }
          })
          const data = response.data
          console.log(data)
          setData(data)
        } catch(err) {
          console.error(err)
        }
      }
      fetchData()
  }, [])

  return (
    <ul>
      {data.map((item, index) => (<ListItem index ={index} item={item}/>))}
    </ul>
  )
}

function ListItem(props) {

  const style = {
      width: '200px',
      height: '200px',
      objectFit: 'scale-down'
  }

  return (
    <>
    <img src={props.item.image.url} style={style} />
    <li key={props.index}>{props.item.name}</li>
    </>
  )
}

export default App;
