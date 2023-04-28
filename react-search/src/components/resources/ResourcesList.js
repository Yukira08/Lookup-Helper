import { Fragment } from "react";
import ResourceItem from "./ResourceItem";

import classes from "./ResourcesList.module.css"

const ResourcesList = (props) => {
    return (
        <Fragment>
            <ul className={classes.cards}>
                {props.resources.map((resource) => (
                    <ResourceItem
                        key={resource.id}
                        id= {resource.id}
                        name={resource.name}
                        url={resource.url}
                        description = {resource.summaries}
                        image = {resource.logo}
                    />
                ))}
            </ul>
        </Fragment>
    )
};

export default ResourcesList;