const AdminFooter = () => {
    return (
      <footer className="bg-white dark:bg-gray-800 py-4 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} ve-shop.co development. All rights reserved. Ask-ar.net
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default AdminFooter;
  