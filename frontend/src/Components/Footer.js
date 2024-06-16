import React from "react";

function Footer() {
  return (
    <footer className="container mx-auto py-4 fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Coded with ❤️ by{" "}
        <a
          className="font-medium"
          href=" "
          target="_blank"
          rel="noreferrer noopener"
        >
          Shinkhal Sinha
        </a>{" "}
        Copyright©
        <span className="text-gradient font-medium">2024</span>
      </p>
    </footer>
  );
}

export default Footer;
