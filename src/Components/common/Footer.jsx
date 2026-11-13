function Footer () {
    return(
       <footer className="bg-gray-900 text-gray-300 px-6 py-8 mt-auto">
       <div className="flex justify-between flex-wrap gap-4">
        <p>&copy; {new Date().getFullYear()}AI recruitment Platform.All rights reserved.</p>
        <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
        </div>
        </div>


       </footer> 
    );
}
export default Footer;