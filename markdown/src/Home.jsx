import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div class="container-fluid text-center jj ">
        <div class="row">
            <p> </p>
        <h1 className='home-head-logo '>Markdown Viewer</h1>
        </div>
        <p></p><p></p>
        <div className="row ">
            <div className="col card shadow-sm p-3 mb-5 bg-white rounded getstart"> 
                <div className=" ">
                    <p></p>
                <h5>What is Markdown ?</h5>
                <p>Markdown is a lightweight markup language that is widely used for 
                   formatting plain text documents. 
                   It is designed to be easy to 
                   read and write in its plain text form.Markdown is 
                   often used for creating documents with simple formatting, such 
                   as web pages, documentation, README files, and notes. 
                   It is a popular choice for writing content on platforms like GitHub, 
                   Stack Overflow, and many blogging platforms.</p>
                </div>
            </div>
            <div className="col card shadow-sm p-3 mb-5 bg-white rounded getstart">
                
                <h3>Get Started !</h3>
                <p></p>
                <Link to='/login' className='btn btn-outline-dark form-control'>Login</Link>
                <p></p>
                <Link to='/register' className='btn btn-primary form-control'>SignUp</Link>
                
            </div>
        </div>
        <p></p>
       <div class="row">
        
            <img className='' src="https://mdg.imgix.net/assets/images/markdown-flowchart.png" alt="" />                                                                                                                                                                                                                                            
             
       </div>
       <p></p>
       <p></p>
       <div className="row">
        <div className="col card shadow-sm p-3 mb-5 bg-white rounded details-home">
        <div class="">
            <div class="card-body">
                <h5 class="card-title">Why MarkDown ?</h5>
                <hr></hr>
                <p class="card-text">
                    <ul>
                        <li>Lightweight Markup</li>
                        <li>Easy to read and write in text form</li>
                        <li>Creating Documets with simple formatting</li>
                        <li>Popular Choices for GitHub, StackOverflow, etc.,</li>
                    </ul>
                    <a href="https://en.wikipedia.org/wiki/Markdown">Read more</a>
                </p>
            </div>
            </div>
        </div>
        <div className="col card shadow-sm p-3 mb-5 bg-white rounded details-home">
        <div class="">
            <div class="card-body">
                <h5 class="card-title">Basic Syntax</h5>
                <hr></hr>
                <p class="card-text">
                    <ul>
                        <li># Headers</li>
                        <li>** Bold ** , * Italics *</li>
                        <li>[Text](Link) , ![Image name](image Link)</li>
                        <li> ``` code ``` </li>
                    </ul>
                    <a href="https://www.markdownguide.org/cheat-sheet/">Read more</a>
                </p>
            </div>
            </div>
        </div>
        <div className="col card shadow-sm p-3 mb-5 bg-white rounded details-home">
        <div class="">
            <div class="card-body">
                <h5 class="card-title">Application Feature</h5>
                <hr></hr>
                <p class="card-text">
                    <ul>
                        <li>Login Users</li>
                        <li>MarkDown Editor</li>
                        <li>Save, Edit, Delete, Read Markdown Documents</li>
                        <li>User Based Documents</li>
                    </ul>
                   
                </p>
            </div>
            </div>
        </div>
       </div>
       <p></p>
       <div className="row">
       <div class="sticky-bottom">© Copyright Markdown Viewer</div>
       </div>
       <p></p>
</div>
    )
}

export default Home