import { 
  battery,
  colors,
  led,
  magsafe,
  open,
  safety,
  sos,
  usb
} from "../assets"


export const navLinks = [
    {
      id: "openpower",
      title: "OpenPower",
    },
    {
      id: "order",
      title: "Pre-Order Now",
    },
    // {
    //     id: "contact",
    //     title: "Contact",
    //   },
      
  ];

  const features = [
    {
      title: "Safety",
      content:"OpenPower prioritizes your safety by continuously monitoring the temperature of the battery pack, internal components, ambient temperature, and battery pack voltage. If any of these parameters fall outside the normal operating range, the power bank automatically shuts down to ensure safety",
      icon: safety
    },

    {
      title: "7800 mAh Battery",
      content:"Boasting a high-capacity 7800 mAh battery, OpenPower ensures you have ample power on the go to charge your devices multiple times without worry",
      icon: battery
    },

    {
      title: "USB-C Power Delivery",
      content:" With USB-C Power Delivery technology, OpenPower can rapidly charge your devices, delivering quick and efficient power when you need it most. ",
      icon: usb
    
    },
    {
      title: "MagSafe Compatibility",
      content:"Designed to work seamlessly with MagSafe-enabled devices, OpenPower provides a secure and reliable charging experience for your Apple products",
      icon: magsafe
    },
    {
      title: "Call for Help (SOS Mode)",
      content:"In emergency situations, press the function button 5 times to activate an SOS mode, where the LED strip flashes 'SOS' in Morse code, providing you with a potentially life-saving communication method",
      icon: sos
    },
    {
      title: "Intuitive Multi-Purpose LED Strip",
      content:" Featuring an intuitive LED strip, OpenPower serves as a communication method, making it easy to check battery status and usage. It's user-friendly and simple to master",
      icon: led
    },
    {
      title: "Open Source",
      content:"Embrace your inner hacker and customize OpenPower to suit your unique needs.Its open-source design allows for hacking and modification, giving tech enthusiasts the freedom to tailor the device to their preferences.",
      icon: open
    },
    {
      title: "Available in a Wide Variety of Colors",
      content:"Express your personal style with OpenPower, available in a wide array of vibrant colors. Choose the one that matches your personality and stands out from the crowd.",
      icon: colors
    },


  ];

  export {features}