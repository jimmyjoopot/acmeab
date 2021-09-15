import React, { useState, useEffect } from 'react';
const employees = [
    {
        id: 1,
        name: 'Anders Andersson',
        title: 'Säljare',
        phone: '070-7777777',
    },
    {
        id: 2,
        name: 'Berit Beritsson',
        title: 'VD',
        phone: '070-7777777',
    },
    {
        id: 3,
        name: 'Cecilia Ceder',
        title: 'Anställd',
        phone: '070-7777777',
    },
];
var color = '';
if (localStorage.getItem('color')) {
    color = localStorage.getItem("color");
}
function Contact() {    

    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('name');

    useEffect(() => {
        const sortArray = type => {
        const types = {
            name: 'name',
            title: 'title',
            phone: 'phone',
        };
        const sortProperty = types[type];
        
        var sortByType = employees.slice(0);
        sortByType.sort(function(a,b) {
            var x = a[sortProperty].toLowerCase();
            var y = b[sortProperty].toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        setData(sortByType);
        };

        sortArray(sortType);
    }, [sortType]); 

    const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
      setActive(!isActive); 
     };
     console.log(localStorage);

    return (
        <section id="Contact" className={color}>
            <div className="wrapper">
                <h2>Kontakta oss</h2>
                <p>Du kan kontakta oss via nedanstående kontaktinformation eller besöka oss på vårt kontor (se karta nedan).</p>
                <button onClick={ToggleClass} className="display-contacts">Visa kontaktpersoner</button>
                <div className={isActive ? "contacts" : "visible contacts"} >                
                    <div className="sort-selector-wrapper">
                    <p>sortera efter: </p>
                        <select onChange={(e) => setSortType(e.target.value)}>
                                <option value="name">Namn</option>
                                <option value="title">Titel</option>                    
                        </select>
                    </div>
                    <div className="column-header">
                        <div>Namn</div>
                        <div>Titel</div>
                        <div>Telefon</div>
                    </div>
                    <div className="employee-list">
                        {data.map(employee => (
                            <div key={employee.id} className="row">
                                <div>{`${employee.name}`}</div>
                                <div>{`${employee.title}`}</div>
                                <div>{`${employee.phone}`}</div>                     
                            </div>
                        ))}
                    </div>
                </div>
            
            </div>
        </section>           
    )
}
export default Contact



