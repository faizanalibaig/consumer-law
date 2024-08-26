import React, { useState } from 'react';

function BusinessHover() {
    const List = [
        {
            key: 1,
            title: "Non-Disclosure Agree"
        }, {
            key: 2,
            title: "Non-Disclosure Agree"
        }, {
            key: 3,
            title: "Non-Disclosure Agree"
        }, {
            key: 4,
            title: "Non-Disclosure Agree"
        }, {
            key: 5,
            title: "Non-Disclosure Agree"
        }
    ]
    const [visible, setVisible] = useState(false);

    return (
        <div className='relative flex items-center lg:h-[100px]  hover:bg-[#F2F7FF] hover:border-b-2
         border-[#4B62F8] px-3' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
            <h1 className='text-[17px]'>Business</h1>
            {visible &&
                <div className='absolute  top-[100px] lg:w-[220px] left-0 bg-white px-4 py-5 flex flex-col rounded-b-[10px] shadow-lg'>
                    {List.map((value, index) => (
                        <h1 key={value.key} className='py-3'>
                            {value.title}
                        </h1>
                    ))}
                </div>
            }
        </div>
    )
}

export default BusinessHover;
