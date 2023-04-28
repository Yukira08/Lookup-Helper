import React from 'react';
import { Fragment } from 'react';
import ToolItem from './ToolItem';
import classes from "./ToolsList.module.css";

const ToolsList = (props) => {
  return (
    <Fragment>
    <ul className={classes.cards}>
        {props.tools.map((tool) => (
            <ToolItem
                key={tool.id}
                id= {tool.id}
                name={tool.title}
                url={tool.url}
                description = {tool.description}
                image = {tool.logo}
            />
        ))}
    </ul>
</Fragment>
  )
}

export default ToolsList
