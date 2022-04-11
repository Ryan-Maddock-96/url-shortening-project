import {useState, useEffect} from 'react';

const LinkShorten = () => {
    const [inputVal, setInputVal] = useState('');
    const [shortLinks, getShortLinks] = useState([]);

    function fetchData() {
        fetch(`https://api.shrtco.de/v2/shorten?url=${inputVal}`)
        .then(response => response.json())
        .then(data => {
            if (shortLinks.findIndex(item => item.short_link == data.result.short_link) === -1) {
                getShortLinks([...shortLinks, data.result]);
            }
        })};

    return (
        <div className='linkShortenContainer'>
            <div className="linkShorten">
                <div>
                    <input type="text" onChange={e=> setInputVal(e.target.value)} />
                </div>
                <button onClick={fetchData}>Shorten</button>
            </div>

            {[...shortLinks].map(link => <div className='linkItem'>{link.short_link}</div>)}
        </div>
    );
}

export default LinkShorten;