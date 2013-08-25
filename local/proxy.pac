// Proxy Auto-Config file generated by autoproxy2pac, 2013-08-25 00:08:59
function FindProxyForURL(url, host) {
    var autoproxy = 'PROXY 127.0.0.1:8087';
    var blackhole = 'PROXY 127.0.0.1:8086';
    if (dnsDomainIs(host, '.google.com') ||
        dnsDomainIs(host, '.google-analytics.com') ||
        dnsDomainIs(host, '.googleapis.com') ||
        dnsDomainIs(host, '.googlecode.com') ||
        dnsDomainIs(host, '.googleusercontent.com') ||
        dnsDomainIs(host, '.wikipedia.org') ||
        dnsDomainIs(host, '.sf.net') ||
        dnsDomainIs(host, '.sourceforge.net') ||
        shExpMatch(host, '*.google.com.*') ||
        host == 'wp.me' ||
        host == 'ow.ly' ||
        host == 'po.st' ||
        host == 'goo.gl')
    {
        return autoproxy;
    }
    if (FindProxyForURLByUrlfilter(url, host) != 'DIRECT')
    {
        return blackhole;
    } else {
        return FindProxyForURLByAutoProxy(url, host);
    }
}

// AUTO-GENERATED RULES, DO NOT MODIFY!
function FindProxyForURLByUrlfilter(url, host) {
    return "DIRECT";
}

function FindProxyForURLByAutoProxy(url, host) {
    return "DIRECT";
}
