import React from 'react';

const Section: React.FC = () => {
    return (
        <div className="min-h-[400px] bg-white flex flex-col items-center justify-center">
            {/* Div de ATENDIMENTO */}
            <div className="bg-white w-full mb-1">
                <div className="text-center py-3 bg-gradient-to-r from-[#003471] to-[#3162B6]">
                    <h1 className="text-[30px] font-bold text-white ">ATENDIMENTO EMLUME</h1>
                </div>
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-[#BBBBBB] to-[#EBEBEB] p-4 mb-0">
                        <p className="font-bold text-[40px] text-black text-center font-['Montserrat']">81 3462-8046</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#BBBBBB] to-[#EBEBEB] p-4">
                        <p className="font-bold text-[40px] text-black text-center font-['Montserrat']">81 3462-8776</p>
                    </div>
                </div>
            </div>

            {/* Div de ATENDIMENTO WHATSAPP */}
            <div className="bg-white w-full">
                <div className="text-center py-3 bg-gradient-to-r from-[#003471] to-[#3162B6]">
                    <h1 className="text-[30px] font-bold text-white">ATENDIMENTO WHATSAPP</h1>
                </div>
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-[#BBBBBB] to-[#EBEBEB] p-4 mb-0">
                        <p className="font-bold text-[40px] text-black text-center font-['Montserrat']">81 99232-5280</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;