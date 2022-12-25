window.conf = {
    download_url: "https://www.123pan.com/s/YFuuVv-xOBc", // 客户端下载地址
}

// TODO: LazyLoad 4
setTimeout(() => {
    document.getElementById("download_link0").href = window.conf.download_url;
    document.getElementById("download_link1").href = window.conf.download_url;
}, 500)