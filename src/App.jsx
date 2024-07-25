import { useEffect, useState } from 'react'


function App() {
  const [isDropDown, setIsDropDown] = useState({
    mainDropDown:false,
    firstDropDown:false,
    secondDropDown:false,
    thirdDropDown:false,
    fourthDropDown:false
  })

  const handleDropDown = (item) => {
    setIsDropDown((prev) => ({
      ...prev,
      [item]: !prev[item], 
    }));

  }
  useEffect(() => {
    if (!isDropDown.mainDropDown) {
      setIsDropDown((prev) => ({
        ...prev,
        firstDropDown: false,
        secondDropDown: false,
        thirdDropDown: false,
        fourthDropDown: false,
      }));
    }
  }, [isDropDown.mainDropDown]);
  

  return (
    
     <div className='main' style={{border:'2px solid black'}}>
        <div className='main-drop' onClick={() => handleDropDown('mainDropDown')} style={{borderBottom:'1px solid black'}}>
          <img src='' />
          <div>
            <p>About Us</p>
            <p>4 articles in this topic</p>
          </div>
          <div >

          </div>

        </div>
       
        {isDropDown.mainDropDown && 
           <div>
             <div className='first-drop' onClick={() => handleDropDown('firstDropDown')} >
               <h1>Drop1</h1>
               {isDropDown.firstDropDown && 
                 <h2>Drop1 is open</h2>
               }
             </div>
             <div className='second-drop' onClick={() => handleDropDown('secondDropDown')}>
             <h1>Drop2</h1>
             {isDropDown.secondDropDown && 
                 <h2>Drop2 is open</h2>
               }
             </div>
             <div className='third-drop' onClick={() => handleDropDown('thirdDropDown')}>
             <h1>Drop3</h1>
             {isDropDown.thirdDropDown && 
                 <h2>Drop3 is open</h2>
               }
             </div>
             <div className='fourth-drop' onClick={() => handleDropDown('fourthDropDown')}>
             <h1>Drop4</h1>
             {isDropDown.fourthDropDown && 
                 <h2>Drop4 is open</h2>
               }
             </div>
           </div>
        }
     </div>
     
    
  )
}

export default App
