import React from 'react';
import Card from '../ui/Card';
import classes from "./ToolItem.module.css";

const ToolItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image}></img>
        </div>
        <div className={classes.container}>
          <div className={classes.name}>
            <a href={props.url} target="_blank">{props.name}</a>
          </div>
          <div className={classes.content}>
            <p>{props.description}</p>
          </div>
        </div>
      </Card>
    </li>
  )
}

export default ToolItem
