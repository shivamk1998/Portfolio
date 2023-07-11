import React from 'react'
import "./services.css";
import services from './Data'


const Services = () => {
  return (
    <section className="services container section">
   <h2 className="section_title">Services</h2>
   <div className="services_container grid">
{
  services.map((service,id)=>{
    return(
      <div className="services_card" key={id}>
<img src={service.image} alt="" className="services_img" />
<h3 className="services_title">{service.title}</h3>
<p className="services_desc">{service.description}</p>
</div>
    )

  })
}
 </div>
</section>
    
  )
}

export default Services;

