import React from 'react'

const Extraskills = (props) => {
    return (
        <>
            <div className='flex items-center  h-6 gap-1'>
                <div className="icon">
                    <lord-icon
                        src="https://cdn.lordicon.com/zrkkrrpl.json"
                        trigger="hover"
                        colors="primary:#121331,secondary:#ffb400"
                        style={{ width: '15px', height: '15px' }}>
                    </lord-icon>
                </div>
                <div className="text-sm text-slate-500">
                    {props.names}
                </div>
            </div>
        </>
    )
}

export default Extraskills
