import React from 'react'

function Contact() {
  return (
    <div>


        <div className=" contact">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Kontaktieren Sie mich!</h1>
      <p className="py-6">Wenn Sie fragen haben oder sich interessieren, melden Sie sich gerne jederzeit </p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
            <span className="label-text">Email</span>
            <p>ag.@gmail.com</p>
        </div>
        <hr />
        <div className="form-control">
            <span className="label-text">Nummer</span>
            <p>491718279382</p>
        </div>
        
      </form>
    </div>
  </div>
</div>



    </div>
  )
}

export default Contact