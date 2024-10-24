import { useEffect, useRef } from 'react';
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

// Register necessary components
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
    const pieChartRef = useRef(null);
    const lineChartRef = useRef(null);
    const barChartRef = useRef(null);
    const doubleBarChartRef = useRef(null); // Reference for the double bar chart
  
    useEffect(() => {
      const ctxPie = document.getElementById('pie').getContext('2d');
      const ctxLine = document.getElementById('line').getContext('2d');
      const ctxBars = document.getElementById('bars').getContext('2d');
      const ctxDoubleBars = document.getElementById('doubleBars').getContext('2d'); // Context for double bar chart
  
      // Destroy existing charts if they exist
      if (pieChartRef.current) {
        pieChartRef.current.destroy();
      }
      if (lineChartRef.current) {
        lineChartRef.current.destroy();
      }
      if (barChartRef.current) {
        barChartRef.current.destroy();
      }
      if (doubleBarChartRef.current) {
        doubleBarChartRef.current.destroy();
      }
  
      // Donut chart setup
      pieChartRef.current = new ChartJs(ctxPie, {
        type: 'pie',
        data: {
          labels: ['القمصان', 'الأحذية', 'الحقائب'],
          datasets: [{
            data: [300, 50, 100],
            backgroundColor: ['#3B82F6', '#14B8A6', '#A855F7'],
          }],
        },
      });
  
      // Line chart setup
      lineChartRef.current = new ChartJs(ctxLine, {
        type: 'line',
        data: {
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
        },
      });
  
      // Bar chart setup
      barChartRef.current = new ChartJs(ctxBars, {
        type: 'bar',
        data: {
          labels: ['يناير', 'فبراير', 'مارس', 'أبريل'],
          datasets: [{
            label: 'الأحذية',
            data: [12, 19, 3, 5],
            backgroundColor: '#14B8A6',
          }, {
            label: 'الحقائب',
            data: [2, 3, 20, 5],
            backgroundColor: '#A855F7',
          }],
        },
      });
  
      // Double Bar chart setup
      doubleBarChartRef.current = new ChartJs(ctxDoubleBars, {
        type: 'bar',
        data: {
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
        },
        options: {
          scales: {
            x: {
              stacked: true, // Stack bars for better visualization
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
  
      // Cleanup on component unmount
      return () => {
        if (pieChartRef.current) {
          pieChartRef.current.destroy();
        }
        if (lineChartRef.current) {
          lineChartRef.current.destroy();
        }
        if (barChartRef.current) {
          barChartRef.current.destroy();
        }
        if (doubleBarChartRef.current) {
          doubleBarChartRef.current.destroy();
        }
      };
    }, []);
  

  return (
    <>
      {/* Donut chart */}
      <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">مخطط الدونات</h4>
        <canvas id="pie" width="374" height="187" className="chartjs-render-monitor"></canvas>
        <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-blue-600 rounded-full"></span>
            <span>القمصان</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"></span>
            <span>الأحذية</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
            <span>الحقائب</span>
          </div>
        </div>
      </div>

      {/* Line chart */}
      <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">مخطط الخطوط</h4>
        <canvas id="line" width="374" height="187" className="chartjs-render-monitor"></canvas>
        <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"></span>
            <span>عضوي</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
            <span>مدفوع</span>
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">مخطط الأعمدة</h4>
        <canvas id="bars" width="374" height="187" className="chartjs-render-monitor"></canvas>
        <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"></span>
            <span>الأحذية</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
            <span>الحقائب</span>
          </div>
        </div>
      </div>


      {/* Double Bar chart */}
      <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">مخطط الأعمدة المزدوجة</h4>
        <canvas id="doubleBars" width="374" height="187" className="chartjs-render-monitor"></canvas>
        <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-blue-600 rounded-full"></span>
            <span>القمصان</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"></span>
            <span>الأحذية</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartsComponent;
