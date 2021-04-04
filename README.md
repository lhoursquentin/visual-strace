# visual-strace

In browser client side visual [strace](https://en.wikipedia.org/wiki/Strace)
(Linux only) representation, showing forks, execves, pipes and exit status
based on a strace run.

Graph building and representation is done with [cytoscape.js](https://js.cytoscape.org/).

To try it out:
[https://lhoursquentin.github.io/visual-strace/](https://lhoursquentin.github.io/visual-strace/).

# Some quick examples:

```sh
libtool --help
```

[visual strace](https://lhoursquentin.github.io/visual-strace/index.html?q=035ft7libtool3sed8automake8autoconf4expr8basename0100010101041110110112010031k1012041k1010031j1012041j1010031k1012041k1010031k1012041k1010031k1012041k1010031k1012041k1010031j1012041j1010031k1012041k1010031k1012041k1010031k1012041k1010031o1012041o1010031k1012041k1010031k1012041k1010031k1012041k1010031k1012041k1010031k1012041k1010031k1012041k1010031k1012041k1010031k1012041k1010031k1012041k1010031k1012041k1010031k1012041k1010031j1012041j1010031k1012041k1010031k1012041k1010031k1012041k1010031k1012041k10120210011021001001130130210010111401401150140116015041h1115021001600101116131h1110031812160418121602100140210010711701700101117121001001180180119018011a01a0010111900101219~424J131a0324J131a041v1410031v141a021001942100180210010011b01b011c01b011d01d0010111c0010131c111e01e011f01f041k151c031k151f041j151c031j151f041k151c031k151f041k151c031k151f041k151c031k151f041k151c031k151f041j151c031j151f041k151c031k151f041k151c031k151f041k151c031k151f041o151c031o151f041k151c031k151f041k151c031k151f041k151c031k151f041k151c031k151f041k151c031k151f041k151c031k151f041k151c031k151f041k151c031k151f041k151c031k151f041k151c031k151f041k151c031k151f041j151c031j151f041k151c031k151f041k151c031k151f041k151c031k151f041k151c031k151f021001e021001c011g01g011h01h042JS161g0320-161g0320-161g0320-161g0320-161g0320-161h021001g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g0320-161g031i161g021001c011i01i011j01j0220Z01i0220Z01c011k01k011l01l021001k021001c011m01m021001c011n01n011o01o021001n011p01p021101n011q01q021001n021001c011r01r021001c011s01s0010141s021001c011t01t0010141t0414171c0314171t021001c011u01u0010151u021001c011v01v011w01w0010151w0412181c0312181w021001v021001c011x01x011y01y0010151y0419191c0319191y021001x021001c011z01z0010141z041a1a1c031a1a1z021001c011A01A0010141A04181b1c03181b1A021001c041t1c1d031t1c1c041O1c1c041Q1c1d041t1d10031t1d1c0420c1c1c042011c1c041S1c1c04111c1c041N1c1d021001c021001b021001002100)

```sh
bash -c '
  echo Hello | wc -c | read nb_letters
  echo "$nb_letters"
'
```
[visual strace](https://lhoursquentin.github.io/visual-strace/index.html?q=03pg04bash2wc01000101010~1110103112010311301114161011221001270101112k316101214121113031111130311111222100130210010d2100)

```sh
zsh -c '
  echo Hello | wc -c | read nb_letters
  echo "$nb_letters"
'
```
[visual strace](https://lhoursquentin.github.io/visual-strace/index.html?q=03pk73zsh2wc01000101010~11101033181011041810111416111001120110210010131812120418121220101112c3161110031113120412131003111312121001052100)

```sh
ldd /bin/bash
```
[visual strace](https://lhoursquentin.github.io/visual-strace/index.html?q=03pwr3ldddld-linux.so.2kld-linux-x86-64.so.201000101010~111011e0101111a2110104112012a0101212821001031130136114014611501520101213d31C1013031Y10130320E1013031O10150210014241110130311101412100135210010b2100)

```sh
env PAGER=cat man man
```
[visual strace](https://lhoursquentin.github.io/visual-strace/index.html?q=03p.u3env3man7preconv3tbl5nroff3cat6locale5groff5troff6grotty0100010101050101110B111011642Z41010032Z41011042Z41011120c0101112012642Z41110032Z41112042Z41112020c0101113010132Z41213042Z41213020c010~114014442Z41310032Z41314042Z41310032001314042Z41310031I131003141314042wA1310031v1310032071310032061310031t1310031413100320913140210010032061310032041310031J131003141310032051310032081310032081310032061310032061310031~1310031k131003141310032061310032071310031j131003141310032041310031J13100320b1310031J13100320a13100320a13100320c1310031413107115010132Z41415042Z41415020c0101116010132Z41516042Z41516042Z41516042Z41516042Z41516042Z41516042Z41516042Z41516042Uo15100117016021001001180100119017011a010011b018011c010011d01900101210011e010011f01b0010131d00101410032Z415100430V8161a0330V81610032Z41510042Z4161a042Z41717032Z41710032Z4151a032Z41610042Z4161a032Z4161f00101510032Z41510042Z4161a032Z41610032Z41510042Z4161a032Z4161a042Z41717032Z41710032Z4151a042Z41710042Z4161c032Z4181a042Z41717042Z4181a042Z41710032Uo151a032Z416170330V81710042Uo161a032Uo161c032Z41817042Z41817042Z4181c042Z41918032Z4191c032Z4181a042Z41717042Z4181c032Z4181a042Z417170330V8171a042Uo171c032Z41817042Z418170330Qs171a0210017042Z4181c032Z4181c042Z41918032Z41917042Z4181c042Z41918032Z4191c042Z4191c042Z41918032Z4191c032Z41818032Z4191c032Uw1817042Uw1817021001c042Z41918032Z4191c042Z41918032Z4191c042Uw1918032Uw191c02100180435Bs1a18042Uw1a180210019132Z41a19042Z41b1b032Z41b19032Z41a19042Z41b1b042Z41c19032Z41a1b042Z41c19042Z41b19032Z41a1b042Z41c19042Z41b19032Z41a1b042Z41c19042Z41b1b032Z41b19032Z41a1b042Z41c1b032Z41b19042Z41b1b042Z41c19032Z41a1b032Z41b1b042Z41c19042Z41b19032Uw1a1b032Z41b1b042Z41c19042UE1b1b032Z41b1b042Z41c1d011g01b042Z41c19021001b042Z41c1b032Z41b1b042Z41c1b032UE1b1b042Z41c1b042gZ1c1b021001g111h01h0010161h24161d1d03161d1h021001g021001d211i01i0010171i511j01i011k01j0010181k0010191jH32Z41c1k3321r1e1j0421r1e1j041O1e1j0421t1e1j041H1e1j042ax1e1j041K1e1j132Z41c1j132Z41c1k032f31e1j132Z41c1j032Z41c1j042Z41e1j042dX1e1j041I1e1k132Z41e1k032eB1e1j032Z41c1k032Xn1e1j042Xn1e1j041E1e1k042Z41f10032Z41f10042Z41g1e032Z41g1k031E1e1k132Z41e1j042Z41e1j042de1e1j041I1e1k032dW1e1j132Z41c1k032KY1e1j042KY1e1j041G1e1k042Z41f10032Z41f10042Z41g1e032Z41g1f032Z41h1e042Z41h1k031G1e1k132Z41e1j042Z41e1k232Z41e1j042Z41e1j032Z41c1k042Z41f10032Z41f10042Z41g1e032Z41g1f032Z41h1e042Z41h1k132Z41e1j042Z41e1k232Z41e1j042Z41e1j032Z41c1k232Z41e1j042Z41e1k042Z41f10032Z41f10042Z41g1e032Z41g1e042Z41h1f032Z41h1k132Z41e1j042Z41e1j032Z41c1j032Z41c1j232Z41c1k032Z41e1j042Z41e1k042Z41f10032Z41f10042Z41g1e032Z41g1k042Z41f1f032Z41h1e042Z41h10032Z41f10142Z41g1e032Z41g1e042Z41h1f032Z41h1k032Z41e1j042Z41e1k232Es1e1j042Es1e1j042001e1j041F1e1j0420Q1e1k042Z41f10032Z41f1k0322r1e1j0421b1e10042Z41g1e032Z41g1k0321b1e1f032Z41h1e042Z41h1k0320t1e1j0420t1e1k0321C1e1j0421C1e1k0322m1e1j0422m1e1j041K1e1k031K1e1j032Z41c1j142Z41e1k032Z41e1j042ci1e1k032ci1e1k0324b1e1j0424b1e1k232Z41e1j042Z41e1j032gZ1c1j042961e1j041E1e1k042Z41f10032Z41f10042Z41g1e032Z41g1k0329K1e1f032Z41h1e042Z41h1j042341e1k032341e1j041N1e1k031N1e1k0327g1e1j0427g1e1j041G1e1k031G1e1k032iD1e1j042iD1e1j0420t1e1k0320t1e1k042Z41f10032Z41f1k042eH1f10042Z41g1e032Z41g10032eH1f1f032Z41h1e042Z41h10042eH1g1e032eH1g1e042Z41h1f032Z41h1k121001j021001i121001d221001e042eA1h1f032eA1h1e121001f1210010h2100)

```sh
sh -c '
  echo int main\; | gcc -x c -
  ./a.out
'
```

[visual strace](https://lhoursquentin.github.io/visual-strace/index.html?q=03rFU2sh3gcc3cc12as8collect22ld5a.out0100010101031110100112011041a1011021001200101112211301300101213731a101352100120114014001013145210012111501500101415511601600101516y21001502100120210010011701700101617~20a010122170)
