import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {

   const tagsList = [{
       id:1,
       tagName: "javascript",
       tagDesc: "For questions regardingprogramming in ECMAScript(JavaScript/JS) and itsvariousdialects. PIease include allrelevant tags on your question"
       
   },{
       id:2,
       tagName:"Python",
       tagDesc: "Python is a multi-paradigm,dynamically typed, multipurposeprogramming language. It isdesigned to be quick to learn,understand, and use, and enforces aclean and uniform syntax"
       
   },{
       id:3,
       tagName: "c#",
       tagDesc: "C# (pronounced 'see sharp) is ahigh level, statically typed, multi-paradigm programming languagedeveloped by Microsoft"
       
   },{
       id:4,
       tagName: "java",
       tagDesc: "Java is a high-level object orientedprogramming language. Use this tagwhen you're having problems usingor understanding the language itself."
       
   },{
       id:5,
       tagName: "php",
       tagDesc: "PHP is a widely used, open source,general-purpose,multi-paradiqm.dynamically typed and interpretedscripting language originallydesigned for server-side webdevelopment"
       
   },{
       id:6,
       tagName: "html",
       tagDesc: "HTML (HyperText MarkupLanguage) is the markup languagefor creating web pages and otherinformation to be displayed in a Webbrowser."
       
   },{
       id:7,
       tagName: "android",
       tagDesc: "Android is Google's mobile operatingsystem, used for programming ordeveloping digital devices(Smartphones, Tablets, Automobiles,TVs, Wear,Glass, loT)."
       
   },{
       id:8,
       tagName: "css",
       tagDesc: "CSS is a representation style sheetlanguage used for describing thelook and formatting of HTML, XMLdocuments and SVG elementsincluding colors, layout, fonts, andanimations"
       
   },{
       id:9,
       tagName: "Reactjs",
       tagDesc: "ReactjsReact is a JavaScript lbrary forbuilding user interfaces. Iit uses adeclarative,component-basedparadigm and aims to be bothefficient and flexible."
       
   },{
       id:10,
       tagName: "nodejs",
       tagDesc: "node.jsNode.js is an event-based, non-blocking, asynchronous VO runtimethat uses Google's V8 JavaScriptengine and libuv library."
       
   }]


  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className="home-container-2">
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keywod or label that categorizes your questions with other, similar questions</p>
        <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question</p>
        <div className='tags-list-container'>
            {
                tagsList.map((tag) => (
                    <TagsList tag={tag} key={tagsList.id} />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Tags
