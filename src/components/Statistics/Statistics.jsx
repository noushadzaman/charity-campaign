import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';

const Statistics = () => {
    const donations = useLoaderData();

    const data = [
        { name: 'Group A', value: donations.length },
        { name: 'Group B', value: 12-donations.length },
    ];

    const COLORS = ['#00C49F', '#FF444A'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className='flex justify-center items-center flex-col gap-[60px] pt-[100px]'>

            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={200}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>

            <div className='flex gap-[50px]'>
                <div className='flex items-center gap-[12px]'>
                    <p>Your Donation</p>
                    <div className='w-[100px] h-[12px] bg-[#00C49F] rounded'></div>
                </div>
                <div className='flex items-center gap-[12px]'>
                    <p>Total Donation</p>
                    <div className='w-[100px] h-[12px] bg-[#FF444A] rounded'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;