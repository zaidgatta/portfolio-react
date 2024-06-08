import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkurl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={linkurl} target="blank"><img src={imgUrl} /></a>
        <div className="proj-txtx">
          <a href={linkurl} target="blank">
          <h4>{title}</h4></a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}