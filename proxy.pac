function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "github.com")) {
        return "PROXY 10.110.11.90:3128"; 
    }
    return "DIRECT"; 
}