import React, { useRef, useCallback }  from 'react'
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
import './style.less'

export default function FilePondComps() {
  const ref = useRef(null)
  const onactivatefile = useCallback(file => {
    console.log(file, file.id);
  }, []);

  return (
    <div className="filepond-comps">
      <FilePond
        ref={ref}
        allowMultiple={true}
        allowDrop
        dropOnPage
        onactivatefile={onactivatefile}
        dropOnElement={false}
      />
    </div>
  )
}
