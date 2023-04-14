import {useState} from 'preact/hooks';

function Tabs({tabs}) {
    const [activeTab, setActiveTab] = useState(0);

    function active(index) {
        setActiveTab(index)
    }
    return (
        <div>
            <div>
                {tabs.map((tab, index) => (
                    <button key={index} onClick= { () => active(index)
                    }>
                        {tab.label}
                    </button>
                ))}
            </div>
            {tabs[activeTab].content}
        </div>
    );
}
export default function ProductDescription() {
    const tabs = [
        { label: 'Tab 1', content: <div>Conteúdo da Tab 1</div> },
        { label: 'Tab 2', content: <div>Conteúdo da Tab 2</div> },
        { label: 'Tab 3', content: <div>Conteúdo da Tab 3</div> },
    ];

    return <Tabs tabs={tabs} />;
}