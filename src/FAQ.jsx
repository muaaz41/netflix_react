import React from 'react';

const FAQ = () => {
    const questions = [
        "What is Netflix?",
        "How much does Netflix cost?",
        "Where can I watch?",
        "How do I cancel?",
        "What can I watch on Netflix?",
        "Is Netflix good for kids?",
    ];

    return (
        <div className="mt-16 w-full mb-4 max-w-screen-lg mx-auto">
            <h3 className="text-1xl font-bold mb-4 text-left">Frequently Asked Questions</h3>
            <div className="mb-4 max-w-screen-lg mx-auto">
                {questions.map((question, index) => (
                    <div key={index} className="faq-item flex justify-between items-center bg-gray-700 p-3 rounded-lg mb-2">
                        <h3 className="text-lg">{question}</h3>
                        <span className="text-2xl font-bold cursor-pointer">+</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;