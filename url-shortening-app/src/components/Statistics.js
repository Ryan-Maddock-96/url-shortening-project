import br from '../images/icon-brand-recognition.svg';
import dr from '../images/icon-detailed-records.svg';
import fc from '../images/icon-fully-customizable.svg';

const Statistics = () => {
    const statItems = [
        {
            title: 'Brand Recognition',
            info: 'Boots your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instill confidence in your content',
            icon: br
        },
        {
            title: 'Detailed Records',
            info: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
            icon: dr
        },
        {
            title: 'Fully Customizable',
            info: 'Improve brand awareness and content discoverability through customizable links. Supercharging audience engagement',
            icon: fc
        }
    ]
    return (
        <section>
            <div className='title'>
                Advanced Statistics
                <p>Track how your links are performing accross web with our advanced statistics dashboard</p>
            </div>
            <div className="statItems">
                {statItems.map(stat => 
                    <div className='item'>
                        <div className='title'>{stat.title}</div>
                        <div>{stat.info}</div>
                        <div className='statIcon'><img src={stat.icon}/></div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Statistics;