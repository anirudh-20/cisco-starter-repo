
export async function getIPinfo(version) {
    
    let url = 
        version === 'ipv4' ? "https://api.ipify.org?format=json"
                           : "https://api64.ipify.org?format=json";

    const datapointName = version === 'ipv4' ? "IPv4 Address" : "IPv6 Address";

    const response = await fetch(url);
    const data = await response.json();
    data.name = datapointName;
    return data;

  }
  
