import React from 'react'
import { Link } from 'react-router-dom';
import NavbarS from '../Main';
export const Notifi = () => {
  return (
    <div>
     <NavbarS />
        <div>
<Link  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
<div class="" aria-label="breadcrumb">
    <ol class="breadcrumb p-3 bg-body-tertiary rounded-3">
      
      
      <li class="mx-3">
      <img src="https://github.com/twbs.png" alt="twbs" width="35" height="35" class="rounded-circle flex-shrink-0"/>
        Add Updtaes or Notification
      </li>
    </ol>
</div>
</Link>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="card card-body mt-2">
    <div className='container'>
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
    </div>
    <div className='container'>
       
        <button type="button" class="btn btn-primary">Send message</button>
    </div>
  </div>
  </div>
</div></div>

<div class="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
    
  <div class="list-group list-group-checkable d-grid gap-2 border-0">
    
    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios1">
      First radio
      <span class="d-block small opacity-50">With support text underneath to add more detail</span>
    </label>

   
    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios2">
      Second radio
      <span class="d-block small opacity-50">Some other text goes here</span>
    </label>

   
    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios3">
      Third radio
      <span class="d-block small opacity-50">And we end with another snippet of text</span>
    </label>

    
    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios4">
      Fourth disabled radio
      <span class="d-block small opacity-50">This option is disabled</span>
    </label>
  </div>
</div>
        </div>
  )
}


export default Notifi;