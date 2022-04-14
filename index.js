const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send({ message: 'Eee konuşmayacak mısın?'})
})
app.get('/cevap/:msg', (req, res) => {
    var m = req.params.msg;
    if(m.toLowerCase().includes("günaydın")) return res.json({message: 'Günaydın! Nasılsın?'});
    else if(m == "sa" || m.toLowerCase().includes("selamün") || m.toLowerCase().includes("selaymün")) return res.json({message: 'Aleyüm selam'});
    else if(m.toLowerCase().includes("mrb") || m.toLowerCase().includes("merhaba")) return res.json({message: 'Merhaba!'});
    else if(m.toLowerCase().includes("nbr") || m.toLowerCase().includes("naber")) return res.json({message: 'İyi senden naber?'});
    else if(m.toLowerCase().includes("adın") || m.toLowerCase().includes("ismin")) return res.json({message: 'Ben Covid-19 senin adın ne?'});
    else if(m.toLowerCase().includes("evet") || m.toLowerCase().includes("evt") || m.toLowerCase().includes("olr") || m.toLowerCase().includes("olur")) return res.json({message: 'hmm.'});
    else if(m.toLowerCase().includes("hayır") || m.toLowerCase().includes("hyr") || m.toLowerCase().includes("olmaz")) return res.json({message: 'Ama, ama neden?'});
    else if(m.toLowerCase().includes("ne yapıyorsun") || m.toLowerCase().includes("napıyorsun") || m.toLowerCase().includes("neyapıyorsun") ||  m.toLowerCase().includes("nasılsın")) return res.json({message: 'İyiyim sen?'});
    else if(m.toLowerCase().includes("nerdesin")) return res.json({message: 'Bilmiyorum sen nerdesin?'});
    else if(m.toLowerCase().includes("seni seviyorum") || m.toLowerCase().includes("i love you")) return res.json({message: 'Bende seni seviyorum.'});
    else if(m.toLowerCase().includes("tatlısın") || m.toLowerCase().includes("tatlisin")) return res.json({message: 'Ayy, sende çok tatlısın.'});
    else if(m.toLowerCase().includes("virus") || m.toLowerCase().includes("covid") || m.toLowerCase().includes("korona")) return res.json({message: 'Bak ben covid oldum aman sende olma dikkat et.'});
    else if(m.toLowerCase().includes("iyi") || m.toLowerCase().includes("ii")) return res.json({message: 'Güzel.'});
    else if(m.toLowerCase().includes("kurucu") || m.toLowerCase().includes("developer") || m.toLowerCase().includes("geliştirici") || m.toLowerCase().includes("yapımcı") || m.toLowerCase().includes("yaptı")) return res.json({message: 'Yapımcım InFlames#2005.'});
    else if(m.toLowerCase().includes("tatlısın") || m.toLowerCase().includes("tatlisin")) return res.json({message: 'Ayy, sende çok tatlısın.'});
    else { res.json({message: 'Çok garip bir konuşma tarzın var?'}) }
})

const listener = app.listen(process.env.PORT, () => {
    console.log("Starting " + listener.address().port);
  });
