import {
  Chart as ChartJs,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  PieController,
  BarController,
  LineController,
} from 'chart.js';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { useMemo } from 'react';

ChartJs.register(
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  PieController,
  BarController,
  LineController
);

const ChartsComponent = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false, // Disable animations to improve performance
  };

  // Memoized data to prevent unnecessary re-renders
  const pieData = useMemo(() => ({
    labels: ['القمصان', 'الأحذية', 'الحقائب'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#3B82F6', '#14B8A6', '#A855F7'],
      },
    ],
  }), []);

  const lineData = useMemo(() => ({
    labels: ['يناير', 'فبراير', 'مارس', 'أبريل'],
    datasets: [
      {
        label: 'عضوي',
        data: [65, 59, 80, 81],
        borderColor: '#14B8A6',
        backgroundColor: 'rgba(20, 184, 166, 0.2)',
      },
      {
        label: 'مدفوع',
        data: [28, 48, 40, 19],
        borderColor: '#A855F7',
        backgroundColor: 'rgba(168, 85, 247, 0.2)',
      },
    ],
  }), []);

  const barData = useMemo(() => ({
    labels: ['يناير', 'فبراير', 'مارس', 'أبريل'],
    datasets: [
      {
        label: 'الأحذية',
        data: [12, 19, 3, 5],
        backgroundColor: '#14B8A6',
      },
      {
        label: 'الحقائب',
        data: [2, 3, 20, 5],
        backgroundColor: '#A855F7',
      },
    ],
  }), []);

  const doubleBarData = useMemo(() => ({
    labels: ['يناير', 'فبراير', 'مارس', 'أبريل'],
    datasets: [
      {
        label: 'القمصان',
        data: [20, 30, 50, 40],
        backgroundColor: '#3B82F6',
      },
      {
        label: 'الأحذية',
        data: [15, 25, 35, 45],
        backgroundColor: '#14B8A6',
      },
    ],
  }), []);

  return (
    <>
      <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          مخطط الدونات
        </h4>
        <div style={{ height: '250px' }}>
          <Pie data={pieData} options={options} />
        </div>
      </div>

      <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          مخطط الخطوط
        </h4>
        <div style={{ height: '250px' }}>
          <Line data={lineData} options={options} />
        </div>
      </div>

      <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          مخطط الأعمدة
        </h4>
        <div style={{ height: '250px' }}>
          <Bar data={barData} options={options} />
        </div>
      </div>

      <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          مخطط الأعمدة المزدوجة
        </h4>
        <div style={{ height: '250px' }}>
          <Bar
            data={doubleBarData}
            options={{
              ...options,
              scales: {
                x: { stacked: true },
                y: { beginAtZero: true, stacked: true },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ChartsComponent;
