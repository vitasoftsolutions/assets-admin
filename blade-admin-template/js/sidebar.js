const sidebarItems = [
  {
    label: "Dashboard",
    href: "index.html",
    icon: "asset/icon/dashboard-1-svgrepo-com.svg",
  },
  {
    label: "Manage Users",
    icon: "asset/icon/users-svgrepo-com.svg",
    children: [
      {
        label: "All Users",
        href: "manage-users/all-users.html",
      },
      {
        label: "Active Users",
        href: "manage-users/active-users.html",
      },
      {
        label: "Banned Users",
        href: "manage-users/banned-users.html",
      },
      {
        label: "Email Verified",
        href: "manage-users/email-verified.html",
      },
      {
        label: "Email Unverified",
        href: "manage-users/email-unverified.html",
      },
      {
        label: "KYC Verified",
        href: "manage-users/kyc-verified.html",
      },
      {
        label: "KYC Unverified",
        href: "manage-users/kyc-unverified.html",
      },
    ],
  },
  {
    label: "Blog",
    icon: "asset/icon/blog-writing-svgrepo-com.svg",
    children: [
      {
        label: "Article",
        href: "blog/article.html",
      },
      {
        label: "Category",
        href: "blog/category.html",
      },
    ],
  },
  {
    label: "Email Manager",
    icon: "asset/icon/email-svgrepo-com.svg",
    children: [
      {
        label: "Email Template",
        href: "email-manager/email-template.html",
      },
      {
        label: "Email Configuration",
        href: "email-manager/email-configuration.html",
      },
    ],
  },
  {
    label: "SMS Manager",
    icon: "asset/icon/sms-organizer-svgrepo-com.svg",
    children: [
      {
        label: "SMS Template",
        href: "sms-manager/template.html",
      },
      {
        label: "SMS Configuration",
        href: "sms-manager/configuration.html",
      },
    ],
  },
  {
    label: "Notification",
    icon: "asset/icon/message-circle-check-svgrepo-com.svg",
    children: [
      {
        label: "Send Via Email",
        href: "notification/email.html",
      },
      {
        label: "Send Via SMS",
        href: "notification/sms.html",
      },
    ],
  },
  {
    label: "Payment Gateway",
    icon: "asset/icon/payment-method-svgrepo-com.svg",
    children: [
      {
        label: "Manual",
        href: "payement-gateway/manual.html",
      },
      {
        label: "Automatic",
        href: "payement-gateway/automatic.html",
      },
    ],
  },
  {
    label: "General Settings",
    href: "general-settings.html",
    icon: "asset/icon/setting-config-svgrepo-com.svg",
  },
  {
    label: "Others",
    icon: "asset/icon/link-svgrepo-com.svg",
    children: [
      {
        label: "FAQ",
        href: "others/faq.html",
      },
      {
        label: "Privacy Policy",
        href: "others/privacy-policy.html",
      },
      {
        label: "Terms & Conditions",
        href: "others/terms-conditions.html",
      },
    ],
  },
];

const systemItems = [
  {
    label: "System Information",
    href: "system/system-information.html",
    icon: "asset/icon/information-svgrepo-com.svg",
  },
  {
    label: "Backup",
    href: "system/backup.html",
    icon: "asset/icon/cloud-wired-svgrepo-com.svg",
  },
  {
    label: "Cache Clean",
    href: "system/cache-clean.html",
    icon: "asset/icon/broom-svgrepo-com.svg",
  },
  {
    label: "Support",
    href: "system/support.html",
    icon: "asset/icon/support-svgrepo-com.svg",
  },
];
const currentPath = window.location.pathname;

const section = currentPath.split("/")[1]; // 'manage-users'
const activeItem = currentPath.split("/")[2]; // 'all-users'

console.log(currentPath);
console.log(section);
console.log(activeItem);

const sidebarMenu = document.getElementById("sidebar-menu");
const sidebarExtra = document.getElementById("sidebar-extra");

sidebarItems.forEach((item) => {
  const listItem = document.createElement("li");

  if (item.children) {
    const button = document.createElement("button");
    button.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "w-full",
      "p-2",
      "text-sm",
      "text-gray-900",
      "transition",
      "duration-75",
      "rounded-lg",
      "group",
      "hover:bg-gray-100",
      "dark:text-white",
      "dark:hover:bg-gray-700",
      "lg:text-base"
    );

    const iconWithText = document.createElement("div");
    iconWithText.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "gap-2"
    );

    const icon = document.createElement("img");
    icon.src = item.icon;
    icon.classList.add("w-6", "mr-2");
    iconWithText.appendChild(icon);

    const text = document.createElement("span");
    text.textContent = item.label;
    text.classList.add("text-sm", "lg:text-base");
    iconWithText.appendChild(text);

    button.appendChild(iconWithText);

    const dropdownIcon = document.createElement("img");
    dropdownIcon.src = "asset/icon/dropdown-arrow-svgrepo-com.svg";
    dropdownIcon.classList.add("w-6");
    button.appendChild(dropdownIcon);

    const dropdownMenu = document.createElement("ul");
    dropdownMenu.classList.add("hidden", "py-2", "space-y-2");

    item.children.forEach((subItem) => {
      const subListItem = document.createElement("li");
      const subLink = document.createElement("a");

      subLink.textContent = subItem.label;
      subLink.classList.add(
        "flex",
        "items-center",
        "w-full",
        "p-2",
        "pl-14",
        "text-gray-900",
        "transition",
        "duration-75",
        "rounded-lg",
        "group",
        "hover:bg-gray-100",
        "dark:text-white",
        "dark:hover:bg-gray-700",
        "cursor-pointer",
        "mx-auto",
        "text-sm",
        "lg:text-base"
      );

      console.log(
        activeItem?.replace(".html", "")?.replace("-", " ")?.toLowerCase()
      );
      if (
        // subItem?.label?.toLowerCase() ===
        activeItem
          ?.replace(".html", "")
          ?.replace("-", " ")
          ?.toLowerCase()
          .includes(subItem.label.toLowerCase())
      ) {
        subLink.classList.add("bg-gray-100");
      }

      subLink.href = subItem.href;

      subListItem.appendChild(subLink);
      dropdownMenu.appendChild(subListItem);
    });

    if (
      item.label.trim().replace(" ", "").toLowerCase() ===
      section.trim().replace("-", "").toLowerCase()
    ) {
      dropdownMenu.classList.remove("hidden"); // Show the dropdown menu
    }

    button.onclick = () => {
      dropdownMenu.classList.toggle("hidden");
    };

    listItem.appendChild(button);
    listItem.appendChild(dropdownMenu);
  } else {
    const link = document.createElement("a");
    const iconWithText = document.createElement("div");
    iconWithText.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "gap-2"
    );

    const icon = document.createElement("img");
    icon.src = item.icon;
    icon.classList.add("w-6", "mr-2");
    iconWithText.appendChild(icon);

    const text = document.createElement("span");
    text.textContent = item.label;
    text.classList.add("text-sm", "lg:text-base");
    iconWithText.appendChild(text);

    link.classList.add(
      "flex",
      "items-center",
      "p-2",
      "text-gray-900",
      "rounded-lg",
      "dark:text-white",
      "hover:bg-gray-100",
      "dark:hover:bg-gray-700",
      "group",
      "cursor-pointer",
      "text-sm",
      "lg:text-base"
    );

    if (
      item.label?.toLowerCase() ===
      section?.replace(".html", "")?.replace("-", " ")?.toLowerCase()
    ) {
      link.classList.add("bg-gray-200");
    }

    if (
      section?.replace(".html", "")?.replace("-", " ")?.toLowerCase() ===
        "index" &&
      item.label?.toLowerCase() === "dashboard"
    ) {
      link.classList.add("bg-gray-200");
    }

    link.href = item.href;

    link.appendChild(iconWithText);

    listItem.appendChild(link);
  }

  sidebarMenu.appendChild(listItem);
});

systemItems.forEach((item) => {
  const listItem = document.createElement("li");

  if (item.children) {
    const button = document.createElement("button");
    button.classList.add(
      "flex",
      "items-center",
      "justify-between",
      "w-full",
      "p-2",
      "text-sm",
      "text-gray-900",
      "transition",
      "duration-75",
      "rounded-lg",
      "group",
      "hover:bg-gray-100",
      "dark:text-white",
      "dark:hover:bg-gray-700",
      "lg:text-base"
    );

    const iconWithText = document.createElement("div");
    iconWithText.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "gap-2"
    );

    const icon = document.createElement("img");
    icon.src = item.icon;
    icon.classList.add("w-6", "mr-2");
    iconWithText.appendChild(icon);

    const text = document.createElement("span");
    text.textContent = item.label;
    text.classList.add("text-sm", "lg:text-base");
    iconWithText.appendChild(text);

    button.appendChild(iconWithText);

    const dropdownIcon = document.createElement("img");
    dropdownIcon.src = "asset/icon/dropdown-arrow-svgrepo-com.svg";
    dropdownIcon.classList.add("w-6");
    button.appendChild(dropdownIcon);

    const dropdownMenu = document.createElement("ul");
    dropdownMenu.classList.add("hidden", "py-2", "space-y-2");

    item.children.forEach((subItem) => {
      const subListItem = document.createElement("li");
      const subLink = document.createElement("a");
      subLink.textContent = subItem.label;

      subLink.classList.add(
        "flex",
        "items-center",
        "w-full",
        "p-2",
        "text-gray-900",
        "transition",
        "duration-75",
        "rounded-lg",
        "pl-11",
        "group",
        "hover:bg-gray-100",
        "dark:text-white",
        "dark:hover:bg-gray-700",
        "cursor-pointer",
        "text-sm",
        "lg:text-base"
      );
      subListItem.appendChild(subLink);
      dropdownMenu.appendChild(subListItem);
    });

    console.log(item.label);
    if (item.label.toLowerCase().includes(section.toLowerCase())) {
      dropdownMenu.classList.remove("hidden"); // Show the dropdown menu
    }

    button.onclick = () => {
      dropdownMenu.classList.toggle("hidden");
    };

    listItem.appendChild(button);
    listItem.appendChild(dropdownMenu);
  } else {
    const link = document.createElement("a");
    const iconWithText = document.createElement("div");
    iconWithText.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "gap-2"
    );

    const icon = document.createElement("img");
    icon.src = item.icon;
    icon.classList.add("w-6", "mr-2");
    iconWithText.appendChild(icon);

    const text = document.createElement("span");
    text.textContent = item.label;
    text.classList.add("text-sm", "lg:text-base");
    iconWithText.appendChild(text);

    link.classList.add(
      "flex",
      "items-center",
      "p-2",
      "text-gray-900",
      "rounded-lg",
      "dark:text-white",
      "hover:bg-gray-100",
      "dark:hover:bg-gray-700",
      "group",
      "cursor-pointer"
    );

    link.href = item.href;

    link.appendChild(iconWithText);

    listItem.appendChild(link);
  }

  sidebarExtra.appendChild(listItem);
});
