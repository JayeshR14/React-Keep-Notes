import React, {useState} from 'react'
import './index.css'

const Text = (props) => {
  const [state, setState] = useState(false);

  const showNotes = () => {
    props.state(state);
  }

  return (
    <>
    <input type="text" onClick={showNotes} placeholder="Start making notes..." id="text" className="border-[#9bc3eb] outline-none bg-transparent border-[2px] rounded-[6px] pl-4 w-[450px] h-[46px]" />
    </>
  )
}
export default Text;



