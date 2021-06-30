import React from "react"
import ListGroup from 'react-bootstrap/ListGroup'


function Overview({overviewSection}){

  return (
    <>
    <h3>{overviewSection.title}</h3>
    <ListGroup  variant="flush">
      {overviewSection.content.map(item => <ListGroup.Item dangerouslySetInnerHTML={{ __html: item }}></ListGroup.Item>)}
    </ListGroup>
    </>
  )
}

export default Overview;