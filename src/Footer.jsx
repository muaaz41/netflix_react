import React from 'react';

const Footer = () => {
    return (
        <div className="mt-16 w-full mb-4 max-w-screen-lg mx-auto">
            <div className="bg-black-900 text-white footer-background max-w-full mx-auto p-4">
                <div className="text-left mb-4">
                    <p className="font-semibold mt-2 underline">Questions? Contact us.</p>
                </div>
            </div>
            {/* Footer Links */}
            <div className="bg-black-900 text-white footer-background w-full p-4 max-w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 space-between">
                    {[
                        ["FAQ", "Investor Relations", "Privacy", "Speed Test"],
                        ["Help Center", "Jobs", "Cookie Preferences", "Legal Notices"],
                        ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"],
                        ["Media Center", "Terms of Use", "Contact Us"],
                    ].map((column, index) => (
                        <div key={index} className="flex flex-col space-y-1">
                            {column.map((link, idx) => (
                                <a key={idx} href="#" className="footer-link">{link}</a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-black-900 text-white footer-background max-w-full mx-auto p-4">
                <div className="mt-6">
                    <select className="bg-800 text-black border border-gray-600 rounded p-2">
                        <option>English</option>
                        <option>Spanish</option>
                    </select>
                </div>
                <br />
                <br />
                <div className="mt-2">
                    <p className="text-sm">Netflix Pakistan</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;