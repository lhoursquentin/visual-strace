const exampleStraceOutput = `49777      0.000000 execve("/home/quentin/.local/bin/system-summary", ["system-summary"], 0x7ffffaea3520 /* 93 vars */) = 0
49777      0.000614 read(4</usr/lib64/libtinfo.so.6.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0P\\364\\0\\0\\0\\0\\0\\0"..., 832) = 832
49777      0.000216 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
49777      0.000181 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49777      0.002495 read(4</home/quentin/projects/system-summary/system-summary>, "#!/bin/sh\\n\\n# TODO\\n# cpu/load\\n# s"..., 80) = 80
49777      0.000170 read(255</home/quentin/projects/system-summary/system-summary>, "#!/bin/sh\\n\\n# TODO\\n# cpu/load\\n# s"..., 7024) = 7024
49777      0.001188 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49778
49777      0.000127 read(4<pipe:[295177]>,  <unfinished ...>
49778      0.000377 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49779
49778      0.000200 read(4<pipe:[296260]>,  <unfinished ...>
49779      0.000271 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49780
49779      0.000169 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49781
49780      0.000504 execve("/usr/bin/bluetoothctl", ["bluetoothctl", "--", "info"], 0x5615639e02e0 /* 93 vars */ <unfinished ...>
49781      0.000100 execve("/usr/bin/sed", ["sed", "-n", "\\n        /^[[:blank:]]*Name: /{\\n"...], 0x5615639e02e0 /* 93 vars */ <unfinished ...>
49780      0.000061 <... execve resumed>) = 0
49781      0.000089 <... execve resumed>) = 0
49780      0.000068 read(4</usr/lib64/libglib-2.0.so.0.6400.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000\\333\\1\\0\\0\\0\\0\\0"..., 832) = 832
49781      0.000088 read(4</usr/lib64/libacl.so.1.1.2253>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20'\\0\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000099 read(4</usr/lib64/libdbus-1.so.3.19.13>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\360\\n\\1\\0\\0\\0\\0\\0"..., 832) = 832
49781      0.000036 read(4</usr/lib64/libselinux.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\207\\0\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000096 read(4</usr/lib64/libreadline.so.8.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\220\\222\\1\\0\\0\\0\\0\\0"..., 832) = 832
49781      0.000035 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000115 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49781      0.000068 read(4</usr/lib64/libattr.so.1.1.2448>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
49781      0.000129 read(4</usr/lib64/libpcre2-8.so.0.10.0>,  <unfinished ...>
49780      0.000008 read(4</usr/lib64/libpcre.so.1.2.12>,  <unfinished ...>
49781      0.000006 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\2604\\0\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260#\\0\\0\\0\\0\\0\\0"..., 832) = 832
49781      0.000098 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000033 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
49781      0.000099 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000072 read(4</usr/lib64/libsystemd.so.0.28.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320B\\1\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000145 read(4</usr/lib64/libtinfo.so.6.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0P\\364\\0\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000109 read(4</usr/lib64/librt-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\0207\\0\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000128 read(4</usr/lib64/liblzma.so.5.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3609\\0\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000136 read(4</usr/lib64/liblz4.so.1.9.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000150 read(4</usr/lib64/libgcrypt.so.20.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\300\\305\\0\\0\\0\\0\\0\\0"..., 832) = 832
49781      0.000106 read(0<pipe:[293835]>,  <unfinished ...>
49780      0.000023 read(4</usr/lib64/libgcc_s-10-20200723.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3605\\0\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000129 read(4</usr/lib64/libgpg-error.so.0.27.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320L\\0\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.000123 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
49780      0.001257 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49780      0.000289 read(5<socket:[292742]>, "OK 6023e5a5142167947bf93794efea7"..., 2048) = 37
49780      0.000119 read(5<socket:[292742]>, "AGREE_UNIX_FD\\r\\n", 2048) = 15
49780      0.000273 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49780      0.000333 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49780      0.000031 read(4<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49780      0.000019 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49780      0.000049 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49780      0.000030 read(4<anon_inode:[eventfd]>, "\\2\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49780      0.000253 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49780      0.000084 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49780      0.000031 read(4<anon_inode:[eventfd]>, "\\2\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49780      0.000994 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49780      0.000051 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49780      0.000035 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49780      0.000032 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49780      0.001035 write(1<pipe:[293835]>, "Missing device address argument\\n", 32) = 32
49781      0.000035 <... read resumed>"Missing device address argument\\n", 4096) = 32
49781      0.000031 read(0<pipe:[293835]>, "", 4096) = 0
49780      0.000230 +++ exited with 1 +++
49781      0.000044 write(1<pipe:[296260]>, "\\n", 1) = 1
49778      0.000039 <... read resumed>"\\n", 128) = 1
49778      0.000042 read(4<pipe:[296260]>,  <unfinished ...>
49781      0.000247 +++ exited with 0 +++
49779      0.000100 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49780, si_uid=1000, si_status=1, si_utime=0, si_stime=0} ---
49779      0.000199 +++ exited with 0 +++
49778      0.000002 <... read resumed>"", 128) = 0
49778      0.000008 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49779, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000349 <... read resumed>"", 128) = 0
49778      0.000003 +++ exited with 0 +++
49777      0.000006 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49778, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000303 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49782
49777      0.000213 read(4<pipe:[295178]>,  <unfinished ...>
49782      0.000295 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49783
49782      0.000196 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49784
49783      0.000518 execve("/home/quentin/projects/useless-scripts/new-usb", ["new-usb"], 0x5615639e02e0 /* 93 vars */ <unfinished ...>
49784      0.000048 execve("/usr/bin/sed", ["sed", "-n", "\\n      /.*ID [[:alnum:]]*:[[:aln"...], 0x5615639e02e0 /* 93 vars */ <unfinished ...>
49783      0.000127 <... execve resumed>) = 0
49784      0.000016 <... execve resumed>) = 0
49784      0.000140 read(4</usr/lib64/libacl.so.1.1.2253>,  <unfinished ...>
49783      0.000015 read(4</usr/lib64/libtinfo.so.6.1>,  <unfinished ...>
49784      0.000007 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20'\\0\\0\\0\\0\\0\\0"..., 832) = 832
49783      0.000006 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0P\\364\\0\\0\\0\\0\\0\\0"..., 832) = 832
49784      0.000095 read(4</usr/lib64/libselinux.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\207\\0\\0\\0\\0\\0\\0"..., 832) = 832
49783      0.000017 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
49784      0.000089 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49783      0.000032 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49784      0.000130 read(4</usr/lib64/libattr.so.1.1.2448>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
49784      0.000109 read(4</usr/lib64/libpcre2-8.so.0.10.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\2604\\0\\0\\0\\0\\0\\0"..., 832) = 832
49784      0.000092 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
49784      0.000107 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
49784      0.000786 read(0<pipe:[296265]>,  <unfinished ...>
49783      0.000373 read(4</home/quentin/projects/useless-scripts/new-usb>, "#!/bin/sh\\n\\n# grep generated from"..., 80) = 80
49783      0.000103 read(255</home/quentin/projects/useless-scripts/new-usb>, "#!/bin/sh\\n\\n# grep generated from"..., 208) = 208
49783      0.000036 read(255</home/quentin/projects/useless-scripts/new-usb>, "", 208) = 0
49783      0.000051 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f65a4b71a10) = 49785
49783      0.000124 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f65a4b71a10) = 49786
49785      0.000503 execve("/usr/bin/lsusb", ["lsusb"], 0x560749a0e700 /* 93 vars */ <unfinished ...>
49786      0.000103 execve("/usr/bin/grep", ["grep", "-v", "-e", "04f3:289b", "-e", "06cb:00bd", "-e", "1d6b:0002", "-e", "1d6b:0003", "-e", "5986:2113", "-e", "8087:0026"], 0x560749a0e700 /* 93 vars */ <unfinished ...>
49785      0.000048 <... execve resumed>) = 0
49786      0.000078 <... execve resumed>) = 0
49785      0.000058 read(4</usr/lib64/libusb-1.0.so.0.2.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0pO\\0\\0\\0\\0\\0\\0"..., 832) = 832
49786      0.000063 read(4</usr/lib64/libpcre.so.1.2.12>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260#\\0\\0\\0\\0\\0\\0"..., 832) = 832
49785      0.000061 read(4</usr/lib64/libudev.so.1.6.17>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260N\\0\\0\\0\\0\\0\\0"..., 832) = 832
49786      0.000062 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49785      0.000048 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49786      0.000111 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
49785      0.000065 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
49785      0.000132 read(4</usr/lib64/libgcc_s-10-20200723.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3605\\0\\0\\0\\0\\0\\0"..., 832) = 832
49786      0.000431 read(4</usr/share/locale/locale.alias>, "# Locale name alias data base.\\n#"..., 4096) = 2998
49786      0.000028 read(4</usr/share/locale/locale.alias>, "", 4096) = 0
49786      0.000137 read(0<pipe:[292743]>,  <unfinished ...>
49785      0.000383 clone(child_stack=0x7fb94e0e4fb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[49787], tls=0x7fb94e0e5700, child_tidptr=0x7fb94e0e59d0) = 49787
49785      0.000677 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/1-9:1.0/uevent>, "DEVTYPE=usb_interface\\nPRODUCT=6c"..., 4096) = 132
49785      0.000032 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/1-9:1.0/uevent>, "", 4096) = 0
49785      0.000069 read(10</run/udev/data/+usb:1-9:1.0>, "I:18000396\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 288
49785      0.000018 read(10</run/udev/data/+usb:1-9:1.0>, "", 4096) = 0
49785      0.000466 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/uevent>, "MAJOR=189\\nMINOR=3\\nDEVNAME=bus/us"..., 4096) = 127
49785      0.000024 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/uevent>, "", 4096) = 0
49785      0.000068 read(10</run/udev/data/c189:3>, "I:17989814\\nE:ID_VENDOR=06cb\\nE:ID"..., 4096) = 469
49785      0.000018 read(10</run/udev/data/c189:3>, "", 4096) = 0
49785      0.000522 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/uevent>, "MAJOR=189\\nMINOR=256\\nDEVNAME=bus/"..., 4096) = 126
49785      0.000024 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/uevent>, "", 4096) = 0
49785      0.000068 read(10</run/udev/data/c189:256>, "I:17915978\\nE:ID_VENDOR=Linux_5.8"..., 4096) = 588
49785      0.000017 read(10</run/udev/data/c189:256>, "", 4096) = 0
49785      0.000489 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/1-10:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=btu"..., 4096) = 143
49785      0.000021 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/1-10:1.0/uevent>, "", 4096) = 0
49785      0.000062 read(10</run/udev/data/+usb:1-10:1.0>, "I:17867840\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 261
49785      0.000017 read(10</run/udev/data/+usb:1-10:1.0>, "", 4096) = 0
49785      0.000426 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/uevent>, "MAJOR=189\\nMINOR=0\\nDEVNAME=bus/us"..., 4096) = 124
49785      0.000022 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/uevent>, "", 4096) = 0
49785      0.000065 read(10</run/udev/data/c189:0>, "I:17825780\\nE:ID_VENDOR=Linux_5.8"..., 4096) = 588
49785      0.000017 read(10</run/udev/data/c189:0>, "", 4096) = 0
49785      0.000487 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/1-8:1.1/uevent>, "DEVTYPE=usb_interface\\nDRIVER=uvc"..., 4096) = 150
49785      0.000021 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/1-8:1.1/uevent>, "", 4096) = 0
49785      0.000064 read(10</run/udev/data/+usb:1-8:1.1>, "I:17867138\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 286
49785      0.000018 read(10</run/udev/data/+usb:1-8:1.1>, "", 4096) = 0
49785      0.000482 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/1-6:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=usb"..., 4096) = 144
49785      0.000022 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/1-6:1.0/uevent>, "", 4096) = 0
49785      0.000062 read(10</run/udev/data/+usb:1-6:1.0>, "I:17867222\\nE:ID_VENDOR_FROM_DATA"..., 4096) = 147
49785      0.000017 read(10</run/udev/data/+usb:1-6:1.0>, "", 4096) = 0
49785      0.000523 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/3-0:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=hub"..., 4096) = 138
49785      0.000020 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/3-0:1.0/uevent>, "", 4096) = 0
49785      0.000073 read(10</run/udev/data/+usb:3-0:1.0>, "I:17930245\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 249
49785      0.000019 read(10</run/udev/data/+usb:3-0:1.0>, "", 4096) = 0
49785      0.000477 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/uevent>, "MAJOR=189\\nMINOR=4\\nDEVNAME=bus/us"..., 4096) = 125
49785      0.000020 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/uevent>, "", 4096) = 0
49785      0.000068 read(10</run/udev/data/c189:4>, "I:17846757\\nE:ID_VENDOR=8087\\nE:ID"..., 4096) = 321
49785      0.000017 read(10</run/udev/data/c189:4>, "", 4096) = 0
49785      0.000622 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/4-0:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=hub"..., 4096) = 138
49785      0.000024 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/4-0:1.0/uevent>, "", 4096) = 0
49785      0.000064 read(10</run/udev/data/+usb:4-0:1.0>, "I:17931226\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 207
49785      0.000017 read(10</run/udev/data/+usb:4-0:1.0>, "", 4096) = 0
49785      0.000504 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/uevent>, "MAJOR=189\\nMINOR=384\\nDEVNAME=bus/"..., 4096) = 126
49785      0.000020 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/uevent>, "", 4096) = 0
49785      0.000069 read(10</run/udev/data/c189:384>, "I:17917225\\nE:ID_VENDOR=Linux_5.8"..., 4096) = 588
49785      0.000022 read(10</run/udev/data/c189:384>, "", 4096) = 0
49785      0.000461 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/uevent>, "MAJOR=189\\nMINOR=2\\nDEVNAME=bus/us"..., 4096) = 130
49785      0.000021 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/uevent>, "", 4096) = 0
49785      0.000066 read(10</run/udev/data/c189:2>, "I:17850630\\nE:ID_VENDOR=SunplusIT"..., 4096) = 449
49785      0.000017 read(10</run/udev/data/c189:2>, "", 4096) = 0
49785      0.000520 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/1-10:1.1/uevent>, "DEVTYPE=usb_interface\\nDRIVER=btu"..., 4096) = 143
49785      0.000023 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/1-10:1.1/uevent>, "", 4096) = 0
49785      0.000064 read(10</run/udev/data/+usb:1-10:1.1>, "I:17868698\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 261
49785      0.000017 read(10</run/udev/data/+usb:1-10:1.1>, "", 4096) = 0
49785      0.000466 read(10</sys/devices/pci0000:00/0000:00:14.0/usb2/uevent>, "MAJOR=189\\nMINOR=128\\nDEVNAME=bus/"..., 4096) = 126
49785      0.000023 read(10</sys/devices/pci0000:00/0000:00:14.0/usb2/uevent>, "", 4096) = 0
49785      0.000073 read(10</run/udev/data/c189:128>, "I:17825449\\nE:ID_VENDOR=Linux_5.8"..., 4096) = 588
49785      0.000018 read(10</run/udev/data/c189:128>, "", 4096) = 0
49785      0.000498 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-0:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=hub"..., 4096) = 138
49785      0.000025 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-0:1.0/uevent>, "", 4096) = 0
49785      0.000069 read(10</run/udev/data/+usb:1-0:1.0>, "I:17841683\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 249
49785      0.000019 read(10</run/udev/data/+usb:1-0:1.0>, "", 4096) = 0
49785      0.000526 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/uevent>, "MAJOR=189\\nMINOR=1\\nDEVNAME=bus/us"..., 4096) = 127
49785      0.000024 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/uevent>, "", 4096) = 0
49785      0.000163 read(10</run/udev/data/c189:1>, "I:17849825\\nE:ID_VENDOR=ELAN\\nE:ID"..., 4096) = 356
49785      0.000022 read(10</run/udev/data/c189:1>, "", 4096) = 0
49785      0.000536 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/1-8:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=uvc"..., 4096) = 150
49785      0.000030 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/1-8:1.0/uevent>, "", 4096) = 0
49785      0.000067 read(10</run/udev/data/+usb:1-8:1.0>, "I:17867287\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 286
49785      0.000020 read(10</run/udev/data/+usb:1-8:1.0>, "", 4096) = 0
49785      0.000655 read(10</sys/devices/pci0000:00/0000:00:14.0/usb2/2-0:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=hub"..., 4096) = 138
49785      0.000032 read(10</sys/devices/pci0000:00/0000:00:14.0/usb2/2-0:1.0/uevent>, "", 4096) = 0
49785      0.000095 read(10</run/udev/data/+usb:2-0:1.0>, "I:17840189\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 207
49785      0.000019 read(10</run/udev/data/+usb:2-0:1.0>, "", 4096) = 0
49785      0.000470 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/uevent>, "MAJOR=189\\nMINOR=0\\nDEVNAME=bus/us"..., 4096) = 124
49785      0.000033 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/uevent>, "", 4096) = 0
49785      0.000088 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/busnum>, "1\\n", 4096) = 2
49785      0.000062 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/devnum>, "1\\n", 4096) = 2
49785      0.000059 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/speed>, "480\\n", 4096) = 4
49785      0.000041 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/descriptors>, "\\22\\1\\0\\2\\t\\0\\1@k\\35\\2\\0\\10\\5\\3\\2\\1\\1\\t\\2\\31\\0\\1\\1\\0\\340\\0\\t\\4\\0\\0\\1"..., 1024) = 43
49785      0.000252 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/uevent>, "MAJOR=189\\nMINOR=4\\nDEVNAME=bus/us"..., 4096) = 125
49785      0.000020 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/uevent>, "", 4096) = 0
49785      0.000067 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/busnum>, "1\\n", 4096) = 2
49785      0.000058 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/devnum>, "5\\n", 4096) = 2
49785      0.000058 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/speed>, "12\\n", 4096) = 3
49785      0.000040 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/descriptors>, "\\22\\1\\1\\2\\340\\1\\1@\\207\\200&\\0\\2\\0\\0\\0\\0\\1\\t\\2\\310\\0\\2\\1\\0\\3402\\t\\4\\0\\0\\3"..., 1024) = 218
49785      0.000283 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/uevent>, "MAJOR=189\\nMINOR=1\\nDEVNAME=bus/us"..., 4096) = 127
49785      0.000023 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/uevent>, "", 4096) = 0
49785      0.000082 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/busnum>, "1\\n", 4096) = 2
49785      0.000074 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/devnum>, "2\\n", 4096) = 2
49785      0.000063 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/speed>, "12\\n", 4096) = 3
49785      0.000041 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/descriptors>, "\\22\\1\\0\\2\\0\\0\\0\\10\\363\\4\\233(\\23W\\4\\16\\0\\1\\t\\2)\\0\\1\\1\\0\\3402\\t\\4\\0\\0\\2"..., 1024) = 59
49785      0.000254 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/uevent>, "MAJOR=189\\nMINOR=2\\nDEVNAME=bus/us"..., 4096) = 130
49785      0.000021 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/uevent>, "", 4096) = 0
49785      0.000076 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/busnum>, "1\\n", 4096) = 2
49785      0.000058 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/devnum>, "3\\n", 4096) = 2
49785      0.000059 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/speed>, "480\\n", 4096) = 4
49785      0.000041 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/descriptors>, "\\22\\1\\1\\2\\357\\2\\1@\\206Y\\23!\\"T\\1\\2\\0\\1\\t\\2\\2\\4\\2\\1\\0\\200\\372\\10\\v\\0\\2\\16"..., 1024) = 1024
49785      0.000018 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/descriptors>, "\\5\\300\\23\\1\\t\\4\\1\\v\\1\\16\\2\\0\\0\\7\\5\\201\\5\\374\\23\\1", 1024) = 20
49785      0.000271 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/uevent>, "MAJOR=189\\nMINOR=3\\nDEVNAME=bus/us"..., 4096) = 127
49785      0.000024 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/uevent>, "", 4096) = 0
49785      0.000072 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/busnum>, "1\\n", 4096) = 2
49785      0.000059 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/devnum>, "4\\n", 4096) = 2
49785      0.000059 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/speed>, "12\\n", 4096) = 3
49785      0.000041 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/descriptors>, "\\22\\1\\0\\2\\377\\20\\377\\10\\313\\6\\275\\0\\0\\0\\0\\0\\1\\1\\t\\2'\\0\\1\\1\\0\\2402\\t\\4\\0\\0\\3"..., 1024) = 57
49785      0.000226 read(8</sys/devices/pci0000:00/0000:00:14.0/usb2/uevent>, "MAJOR=189\\nMINOR=128\\nDEVNAME=bus/"..., 4096) = 126
49785      0.000020 read(8</sys/devices/pci0000:00/0000:00:14.0/usb2/uevent>, "", 4096) = 0
49785      0.000068 read(8</sys/devices/pci0000:00/0000:00:14.0/usb2/busnum>, "2\\n", 4096) = 2
49785      0.000058 read(8</sys/devices/pci0000:00/0000:00:14.0/usb2/devnum>, "1\\n", 4096) = 2
49785      0.000058 read(8</sys/devices/pci0000:00/0000:00:14.0/usb2/speed>, "10000\\n", 4096) = 6
49785      0.000041 read(8</sys/devices/pci0000:00/0000:00:14.0/usb2/descriptors>, "\\22\\1\\20\\3\\t\\0\\3\\tk\\35\\3\\0\\10\\5\\3\\2\\1\\1\\t\\2\\37\\0\\1\\1\\0\\340\\0\\t\\4\\0\\0\\1"..., 1024) = 49
49785      0.000324 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/uevent>, "MAJOR=189\\nMINOR=256\\nDEVNAME=bus/"..., 4096) = 126
49785      0.000024 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/uevent>, "", 4096) = 0
49785      0.000069 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/busnum>, "3\\n", 4096) = 2
49785      0.000059 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/devnum>, "1\\n", 4096) = 2
49785      0.000061 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/speed>, "480\\n", 4096) = 4
49785      0.000042 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/descriptors>, "\\22\\1\\0\\2\\t\\0\\1@k\\35\\2\\0\\10\\5\\3\\2\\1\\1\\t\\2\\31\\0\\1\\1\\0\\340\\0\\t\\4\\0\\0\\1"..., 1024) = 43
49785      0.000323 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/uevent>, "MAJOR=189\\nMINOR=384\\nDEVNAME=bus/"..., 4096) = 126
49785      0.000020 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/uevent>, "", 4096) = 0
49785      0.000069 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/busnum>, "4\\n", 4096) = 2
49785      0.000065 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/devnum>, "1\\n", 4096) = 2
49785      0.000065 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/speed>, "10000\\n", 4096) = 6
49785      0.000042 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/descriptors>, "\\22\\1\\20\\3\\t\\0\\3\\tk\\35\\3\\0\\10\\5\\3\\2\\1\\1\\t\\2\\37\\0\\1\\1\\0\\340\\0\\t\\4\\0\\0\\1"..., 1024) = 49
49785      0.000098 write(9<pipe:[294455]>, "\\1", 1) = 1
49785      0.000389 read(11</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/product>, "Touchscreen\\n", 128) = 12
49785      0.000186 read(8<pipe:[294455]>, "\\1", 1) = 1
49785      0.000030 write(9<pipe:[294455]>, "\\1", 1) = 1
49785      0.000050 write(7<pipe:[295180]>, "\\1", 1) = 1
49787      0.000025 read(6<pipe:[295180]>, "\\1", 1) = 1
49787      0.000068 +++ exited with 0 +++
49785      0.000084 write(1<pipe:[292743]>, "Bus 004 Device 001: ID 1d6b:0003"..., 531) = 531
49786      0.000027 <... read resumed>"Bus 004 Device 001: ID 1d6b:0003"..., 98304) = 531
49786      0.000017 read(0<pipe:[292743]>, "", 98304) = 0
49785      0.000103 +++ exited with 0 +++
49786      0.000123 +++ exited with 1 +++
49783      0.000188 read(4</usr/share/terminfo/t/tmux-256color>, "\\36\\2#\\0+\\0\\17\\0i\\1\\361\\4tmux-256color|tmux w"..., 32768) = 3217
49783      0.000020 read(4</usr/share/terminfo/t/tmux-256color>, "", 28672) = 0
49783      0.000188 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49785, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49784      0.000152 <... read resumed>"", 4096) = 0
49783      0.000004 +++ exited with 1 +++
49784      0.000132 +++ exited with 0 +++
49782      0.000059 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49783, si_uid=1000, si_status=1, si_utime=0, si_stime=0} ---
49777      0.000139 <... read resumed>"", 128) = 0
49782      0.000004 +++ exited with 0 +++
49777      0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49782, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000251 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49788
49777      0.000119 read(4<pipe:[295181]>,  <unfinished ...>
49788      0.000253 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49789
49788      0.000132 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49790
49788      0.000163 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49791
49789      0.000298 execve("/usr/bin/ps", ["ps", "axk", "pcpu", "o", "comm,pcpu"], 0x5615639e02e0 /* 93 vars */ <unfinished ...>
49791      0.000102 read(0<pipe:[296267]>,  <unfinished ...>
49789      0.000036 <... execve resumed>) = 0
49790      0.000004 execve("/usr/bin/tail", ["tail", "-n", "1"], 0x5615639e02e0 /* 93 vars */) = 0
49789      0.000125 read(4</usr/lib64/libprocps.so.7.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\\\\\0\\0\\0\\0\\0\\0"..., 832) = 832
49790      0.000106 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49789      0.000034 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
49789      0.000109 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49789      0.000173 read(4</usr/lib64/libsystemd.so.0.28.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320B\\1\\0\\0\\0\\0\\0"..., 832) = 832
49789      0.000110 read(4</usr/lib64/librt-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\0207\\0\\0\\0\\0\\0\\0"..., 832) = 832
49790      0.000022 read(4</usr/share/locale/locale.alias>, "# Locale name alias data base.\\n#"..., 4096) = 2998
49790      0.000028 read(4</usr/share/locale/locale.alias>, "", 4096) = 0
49789      0.000073 read(4</usr/lib64/liblzma.so.5.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3609\\0\\0\\0\\0\\0\\0"..., 832) = 832
49790      0.000035 read(0<pipe:[296266]>,  <unfinished ...>
49789      0.000081 read(4</usr/lib64/liblz4.so.1.9.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
49789      0.000109 read(4</usr/lib64/libgcrypt.so.20.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\300\\305\\0\\0\\0\\0\\0\\0"..., 832) = 832
49789      0.000093 read(4</usr/lib64/libgcc_s-10-20200723.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3605\\0\\0\\0\\0\\0\\0"..., 832) = 832
49789      0.000093 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
49789      0.000124 read(4</usr/lib64/libgpg-error.so.0.27.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320L\\0\\0\\0\\0\\0\\0"..., 832) = 832
49789      0.000749 read(4</proc/49789/auxv>, "!\\0\\0\\0\\0\\0\\0\\0\\0000k\\206\\374~\\0\\0\\20\\0\\0\\0\\0\\0\\0\\0\\377\\373\\353\\277\\0\\0\\0\\0"..., 1024) = 320
49789      0.000055 read(4</proc/sys/kernel/osrelease>, "5.8.4-200.fc32.x86_64\\n", 1024) = 22
49789      0.000052 read(4</sys/devices/system/cpu/online>, "0-7\\n", 8192) = 4
49789      0.000050 read(4</proc/49789/auxv>, "!\\0\\0\\0\\0\\0\\0\\0\\0000k\\206\\374~\\0\\0\\20\\0\\0\\0\\0\\0\\0\\0\\377\\373\\353\\277\\0\\0\\0\\0"..., 1024) = 320
49789      0.000294 read(4</proc/49789/stat>, "49789 (ps) R 49788 49772 26647 3"..., 1024) = 320
49789      0.000099 read(4</proc/uptime>, "46335.35 37712.46\\n", 8191) = 18
49789      0.000049 read(5</usr/share/locale/locale.alias>, "# Locale name alias data base.\\n#"..., 4096) = 2998
49789      0.000027 read(5</usr/share/locale/locale.alias>, "", 4096) = 0
49789      0.000138 read(5</proc/sys/kernel/osrelease>, "5.8.4-200.fc32.x86_64\\n", 1024) = 22
49789      0.000046 read(5</proc/meminfo>, "MemTotal:       16020584 kB\\nMemF"..., 8191) = 1475
49789      0.000330 read(7</proc/1/stat>, "1 (systemd) S 0 1 1 0 -1 4194560"..., 1024) = 190
49789      0.000047 read(7</proc/1/status>, "Name:\\tsystemd\\nUmask:\\t0000\\nState:"..., 1024) = 1024
49789      0.000026 read(7</proc/1/status>, ",00000000,00000000,00000000,0000"..., 1024) = 274
49789      0.000070 read(7</proc/2/stat>, "2 (kthreadd) S 0 0 0 0 -1 212998"..., 2048) = 150
49789      0.000054 read(7</proc/2/status>, "Name:\\tkthreadd\\nUmask:\\t0000\\nState"..., 2048) = 942
49789      0.000070 read(7</proc/3/stat>, "3 (rcu_gp) I 2 0 0 0 -1 69238880"..., 2048) = 151
49789      0.000044 read(7</proc/3/status>, "Name:\\trcu_gp\\nUmask:\\t0000\\nState:\\t"..., 2048) = 934
49789      0.000052 read(7</proc/4/stat>, "4 (rcu_par_gp) I 2 0 0 0 -1 6923"..., 2048) = 155
49789      0.000039 read(7</proc/4/status>, "Name:\\trcu_par_gp\\nUmask:\\t0000\\nSta"..., 2048) = 938
49789      0.000056 read(7</proc/6/stat>, "6 (kworker/0:0H-kblockd) I 2 0 0"..., 2048) = 165
49789      0.000040 read(7</proc/6/status>, "Name:\\tkworker/0:0H-kblockd\\nUmask"..., 2048) = 946
49789      0.000051 read(7</proc/9/stat>, "9 (mm_percpu_wq) I 2 0 0 0 -1 69"..., 2048) = 157
49789      0.000040 read(7</proc/9/status>, "Name:\\tmm_percpu_wq\\nUmask:\\t0000\\nS"..., 2048) = 940
49789      0.000050 read(7</proc/10/stat>, "10 (ksoftirqd/0) S 2 0 0 0 -1 69"..., 2048) = 156
49789      0.000040 read(7</proc/10/status>, "Name:\\tksoftirqd/0\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000050 read(7</proc/11/stat>, "11 (rcu_sched) I 2 0 0 0 -1 2129"..., 2048) = 155
49789      0.000040 read(7</proc/11/status>, "Name:\\trcu_sched\\nUmask:\\t0000\\nStat"..., 2048) = 947
49789      0.000051 read(7</proc/12/stat>, "12 (migration/0) S 2 0 0 0 -1 69"..., 2048) = 159
49789      0.000040 read(7</proc/12/status>, "Name:\\tmigration/0\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000051 read(7</proc/13/stat>, "13 (cpuhp/0) S 2 0 0 0 -1 692388"..., 2048) = 152
49789      0.000040 read(7</proc/13/status>, "Name:\\tcpuhp/0\\nUmask:\\t0000\\nState:"..., 2048) = 942
49789      0.000050 read(7</proc/14/stat>, "14 (cpuhp/1) S 2 0 0 0 -1 692391"..., 2048) = 152
49789      0.000039 read(7</proc/14/status>, "Name:\\tcpuhp/1\\nUmask:\\t0000\\nState:"..., 2048) = 943
49789      0.000049 read(7</proc/15/stat>, "15 (migration/1) S 2 0 0 0 -1 69"..., 2048) = 160
49789      0.000039 read(7</proc/15/status>, "Name:\\tmigration/1\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000049 read(7</proc/16/stat>, "16 (ksoftirqd/1) S 2 0 0 0 -1 69"..., 2048) = 156
49789      0.000047 read(7</proc/16/status>, "Name:\\tksoftirqd/1\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000052 read(7</proc/18/stat>, "18 (kworker/1:0H-kblockd) I 2 0 "..., 2048) = 166
49789      0.000040 read(7</proc/18/status>, "Name:\\tkworker/1:0H-kblockd\\nUmask"..., 2048) = 951
49789      0.000051 read(7</proc/19/stat>, "19 (cpuhp/2) S 2 0 0 0 -1 692391"..., 2048) = 152
49789      0.000040 read(7</proc/19/status>, "Name:\\tcpuhp/2\\nUmask:\\t0000\\nState:"..., 2048) = 943
49789      0.000050 read(7</proc/20/stat>, "20 (migration/2) S 2 0 0 0 -1 69"..., 2048) = 160
49789      0.000040 read(7</proc/20/status>, "Name:\\tmigration/2\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000050 read(7</proc/21/stat>, "21 (ksoftirqd/2) S 2 0 0 0 -1 69"..., 2048) = 156
49789      0.000039 read(7</proc/21/status>, "Name:\\tksoftirqd/2\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000067 read(7</proc/23/stat>, "23 (kworker/2:0H-kblockd) I 2 0 "..., 2048) = 166
49789      0.000046 read(7</proc/23/status>, "Name:\\tkworker/2:0H-kblockd\\nUmask"..., 2048) = 951
49789      0.000052 read(7</proc/24/stat>, "24 (cpuhp/3) S 2 0 0 0 -1 692391"..., 2048) = 152
49789      0.000040 read(7</proc/24/status>, "Name:\\tcpuhp/3\\nUmask:\\t0000\\nState:"..., 2048) = 943
49789      0.000049 read(7</proc/25/stat>, "25 (migration/3) S 2 0 0 0 -1 69"..., 2048) = 160
49789      0.000039 read(7</proc/25/status>, "Name:\\tmigration/3\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000050 read(7</proc/26/stat>, "26 (ksoftirqd/3) S 2 0 0 0 -1 69"..., 2048) = 156
49789      0.000040 read(7</proc/26/status>, "Name:\\tksoftirqd/3\\nUmask:\\t0000\\nSt"..., 2048) = 949
49789      0.000049 read(7</proc/28/stat>, "28 (kworker/3:0H-kblockd) I 2 0 "..., 2048) = 166
49789      0.000039 read(7</proc/28/status>, "Name:\\tkworker/3:0H-kblockd\\nUmask"..., 2048) = 951
49789      0.000050 read(7</proc/29/stat>, "29 (cpuhp/4) S 2 0 0 0 -1 692391"..., 2048) = 152
49789      0.000040 read(7</proc/29/status>, "Name:\\tcpuhp/4\\nUmask:\\t0000\\nState:"..., 2048) = 943
49789      0.000052 read(7</proc/30/stat>, "30 (migration/4) S 2 0 0 0 -1 69"..., 2048) = 160
49789      0.000042 read(7</proc/30/status>, "Name:\\tmigration/4\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000050 read(7</proc/31/stat>, "31 (ksoftirqd/4) S 2 0 0 0 -1 69"..., 2048) = 156
49789      0.000039 read(7</proc/31/status>, "Name:\\tksoftirqd/4\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000054 read(7</proc/33/stat>, "33 (kworker/4:0H-events_highpri)"..., 2048) = 173
49789      0.000039 read(7</proc/33/status>, "Name:\\tkworker/4:0H-events_highpr"..., 2048) = 958
49789      0.000051 read(7</proc/34/stat>, "34 (cpuhp/5) S 2 0 0 0 -1 692391"..., 2048) = 152
49789      0.000039 read(7</proc/34/status>, "Name:\\tcpuhp/5\\nUmask:\\t0000\\nState:"..., 2048) = 943
49789      0.000050 read(7</proc/35/stat>, "35 (migration/5) S 2 0 0 0 -1 69"..., 2048) = 160
49789      0.000040 read(7</proc/35/status>, "Name:\\tmigration/5\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000050 read(7</proc/36/stat>, "36 (ksoftirqd/5) S 2 0 0 0 -1 69"..., 2048) = 156
49789      0.000039 read(7</proc/36/status>, "Name:\\tksoftirqd/5\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000052 read(7</proc/38/stat>, "38 (kworker/5:0H-kblockd) I 2 0 "..., 2048) = 166
49789      0.000040 read(7</proc/38/status>, "Name:\\tkworker/5:0H-kblockd\\nUmask"..., 2048) = 951
49789      0.000093 read(7</proc/39/stat>, "39 (cpuhp/6) S 2 0 0 0 -1 692391"..., 2048) = 152
49789      0.000041 read(7</proc/39/status>, "Name:\\tcpuhp/6\\nUmask:\\t0000\\nState:"..., 2048) = 943
49789      0.000051 read(7</proc/40/stat>, "40 (migration/6) S 2 0 0 0 -1 69"..., 2048) = 160
49789      0.000040 read(7</proc/40/status>, "Name:\\tmigration/6\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000049 read(7</proc/41/stat>, "41 (ksoftirqd/6) S 2 0 0 0 -1 69"..., 2048) = 156
49789      0.000039 read(7</proc/41/status>, "Name:\\tksoftirqd/6\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000050 read(7</proc/43/stat>, "43 (kworker/6:0H-events_highpri)"..., 2048) = 173
49789      0.000054 read(7</proc/43/status>, "Name:\\tkworker/6:0H-events_highpr"..., 2048) = 958
49789      0.000053 read(7</proc/44/stat>, "44 (cpuhp/7) S 2 0 0 0 -1 692391"..., 2048) = 152
49789      0.000040 read(7</proc/44/status>, "Name:\\tcpuhp/7\\nUmask:\\t0000\\nState:"..., 2048) = 943
49789      0.000050 read(7</proc/45/stat>, "45 (migration/7) S 2 0 0 0 -1 69"..., 2048) = 160
49789      0.000043 read(7</proc/45/status>, "Name:\\tmigration/7\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000052 read(7</proc/46/stat>, "46 (ksoftirqd/7) S 2 0 0 0 -1 69"..., 2048) = 156
49789      0.000038 read(7</proc/46/status>, "Name:\\tksoftirqd/7\\nUmask:\\t0000\\nSt"..., 2048) = 948
49789      0.000050 read(7</proc/48/stat>, "48 (kworker/7:0H-events_highpri)"..., 2048) = 173
49789      0.000040 read(7</proc/48/status>, "Name:\\tkworker/7:0H-events_highpr"..., 2048) = 958
49789      0.000049 read(7</proc/49/stat>, "49 (kdevtmpfs) S 2 0 0 0 -1 2130"..., 2048) = 153
49789      0.000040 read(7</proc/49/status>, "Name:\\tkdevtmpfs\\nUmask:\\t0022\\nStat"..., 2048) = 947
49789      0.000051 read(7</proc/50/stat>, "50 (netns) I 2 0 0 0 -1 69238880"..., 2048) = 151
49789      0.000040 read(7</proc/50/status>, "Name:\\tnetns\\nUmask:\\t0000\\nState:\\tI"..., 2048) = 937
49789      0.000049 read(7</proc/51/stat>, "51 (rcu_tasks_kthre) S 2 0 0 0 -"..., 2048) = 159
49789      0.000039 read(7</proc/51/status>, "Name:\\trcu_tasks_kthre\\nUmask:\\t000"..., 2048) = 951
49789      0.000049 read(7</proc/52/stat>, "52 (rcu_tasks_rude_) S 2 0 0 0 -"..., 2048) = 159
49789      0.000039 read(7</proc/52/status>, "Name:\\trcu_tasks_rude_\\nUmask:\\t000"..., 2048) = 951
49789      0.000050 read(7</proc/53/stat>, "53 (rcu_tasks_trace) S 2 0 0 0 -"..., 2048) = 159
49789      0.000039 read(7</proc/53/status>, "Name:\\trcu_tasks_trace\\nUmask:\\t000"..., 2048) = 951
49789      0.000049 read(7</proc/54/stat>, "54 (kauditd) S 2 0 0 0 -1 107583"..., 2048) = 154
49789      0.000040 read(7</proc/54/status>, "Name:\\tkauditd\\nUmask:\\t0000\\nState:"..., 2048) = 945
49789      0.000049 read(7</proc/55/stat>, "55 (oom_reaper) S 2 0 0 0 -1 107"..., 2048) = 157
49789      0.000047 read(7</proc/55/status>, "Name:\\toom_reaper\\nUmask:\\t0000\\nSta"..., 2048) = 946
49789      0.000050 read(7</proc/56/stat>, "56 (writeback) I 2 0 0 0 -1 6923"..., 2048) = 155
49789      0.000040 read(7</proc/56/status>, "Name:\\twriteback\\nUmask:\\t0000\\nStat"..., 2048) = 941
49789      0.000050 read(7</proc/57/stat>, "57 (kcompactd0) S 2 0 0 0 -1 107"..., 2048) = 157
49789      0.000042 read(7</proc/57/status>, "Name:\\tkcompactd0\\nUmask:\\t0000\\nSta"..., 2048) = 946
49789      0.000050 read(7</proc/58/stat>, "58 (ksmd) S 2 0 0 0 -1 107583904"..., 2048) = 151
49789      0.000039 read(7</proc/58/status>, "Name:\\tksmd\\nUmask:\\t0000\\nState:\\tS "..., 2048) = 940
49789      0.000049 read(7</proc/59/stat>, "59 (khugepaged) S 2 0 0 0 -1 107"..., 2048) = 158
49789      0.000040 read(7</proc/59/status>, "Name:\\tkhugepaged\\nUmask:\\t0000\\nSta"..., 2048) = 946
49789      0.000049 read(7</proc/78/stat>, "78 (cryptd) I 2 0 0 0 -1 6923888"..., 2048) = 152
49789      0.000039 read(7</proc/78/status>, "Name:\\tcryptd\\nUmask:\\t0000\\nState:\\t"..., 2048) = 938
49789      0.000058 read(7</proc/126/stat>, "126 (kintegrityd) I 2 0 0 0 -1 6"..., 2048) = 158
49789      0.000041 read(7</proc/126/status>, "Name:\\tkintegrityd\\nUmask:\\t0000\\nSt"..., 2048) = 947
49789      0.000050 read(7</proc/127/stat>, "127 (kblockd) I 2 0 0 0 -1 69238"..., 2048) = 154
49789      0.000040 read(7</proc/127/status>, "Name:\\tkblockd\\nUmask:\\t0000\\nState:"..., 2048) = 943
49789      0.000050 read(7</proc/128/stat>, "128 (blkcg_punt_bio) I 2 0 0 0 -"..., 2048) = 161
49789      0.000040 read(7</proc/128/status>, "Name:\\tblkcg_punt_bio\\nUmask:\\t0000"..., 2048) = 950
49789      0.000049 read(7</proc/131/stat>, "131 (tpm_dev_wq) I 2 0 0 0 -1 69"..., 2048) = 157
49789      0.000040 read(7</proc/131/status>, "Name:\\ttpm_dev_wq\\nUmask:\\t0000\\nSta"..., 2048) = 946
49789      0.000049 read(7</proc/132/stat>, "132 (ata_sff) I 2 0 0 0 -1 69238"..., 2048) = 154
49789      0.000040 read(7</proc/132/status>, "Name:\\tata_sff\\nUmask:\\t0000\\nState:"..., 2048) = 943
49789      0.000060 read(7</proc/133/stat>, "133 (md) I 2 0 0 0 -1 69238880 0"..., 2048) = 149
49789      0.000043 read(7</proc/133/status>, "Name:\\tmd\\nUmask:\\t0000\\nState:\\tI (i"..., 2048) = 938
49789      0.000051 read(7</proc/134/stat>, "134 (edac-poller) I 2 0 0 0 -1 6"..., 2048) = 158
49789      0.000039 read(7</proc/134/status>, "Name:\\tedac-poller\\nUmask:\\t0000\\nSt"..., 2048) = 947
49789      0.000054 read(7</proc/135/stat>, "135 (devfreq_wq) I 2 0 0 0 -1 69"..., 2048) = 157
49789      0.000040 read(7</proc/135/status>, "Name:\\tdevfreq_wq\\nUmask:\\t0000\\nSta"..., 2048) = 946
49789      0.000049 read(7</proc/136/stat>, "136 (watchdogd) S 2 0 0 0 -1 212"..., 2048) = 157
49789      0.000039 read(7</proc/136/status>, "Name:\\twatchdogd\\nUmask:\\t0000\\nStat"..., 2048) = 949
49789      0.000049 read(7</proc/137/stat>, "137 (pm_wq) I 2 0 0 0 -1 6923888"..., 2048) = 152
49789      0.000039 read(7</proc/137/status>, "Name:\\tpm_wq\\nUmask:\\t0000\\nState:\\tI"..., 2048) = 941
49789      0.000049 read(7</proc/138/stat>, "138 (kswapd0) S 2 0 0 0 -1 10618"..., 2048) = 154
49789      0.000039 read(7</proc/138/status>, "Name:\\tkswapd0\\nUmask:\\t0000\\nState:"..., 2048) = 948
49789      0.000049 read(7</proc/140/stat>, "140 (kthrotld) I 2 0 0 0 -1 6923"..., 2048) = 156
49789      0.000039 read(7</proc/140/status>, "Name:\\tkthrotld\\nUmask:\\t0000\\nState"..., 2048) = 944
49789      0.000050 read(7</proc/141/stat>, "141 (irq/123-pciehp) S 2 0 0 0 -"..., 2048) = 162
49789      0.000040 read(7</proc/141/status>, "Name:\\tirq/123-pciehp\\nUmask:\\t0000"..., 2048) = 952
49789      0.000049 read(7</proc/142/stat>, "142 (irq/127-pciehp) S 2 0 0 0 -"..., 2048) = 162
49789      0.000038 read(7</proc/142/status>, "Name:\\tirq/127-pciehp\\nUmask:\\t0000"..., 2048) = 952
49789      0.000050 read(7</proc/144/stat>, "144 (acpi_thermal_pm) I 2 0 0 0 "..., 2048) = 163
49789      0.000051 read(7</proc/144/status>, "Name:\\tacpi_thermal_pm\\nUmask:\\t000"..., 2048) = 951
49789      0.000050 read(7</proc/146/stat>, "146 (dm_bufio_cache) I 2 0 0 0 -"..., 2048) = 162
49789      0.000038 read(7</proc/146/status>, "Name:\\tdm_bufio_cache\\nUmask:\\t0000"..., 2048) = 950
49789      0.000056 read(7</proc/147/stat>, "147 (ipv6_addrconf) I 2 0 0 0 -1"..., 2048) = 161
49789      0.000042 read(7</proc/147/status>, "Name:\\tipv6_addrconf\\nUmask:\\t0000\\n"..., 2048) = 949
49789      0.000067 read(7</proc/154/stat>, "154 (kstrp) I 2 0 0 0 -1 6923888"..., 2048) = 153
49789      0.000042 read(7</proc/154/status>, "Name:\\tkstrp\\nUmask:\\t0000\\nState:\\tI"..., 2048) = 941
49789      0.000050 read(7</proc/194/stat>, "194 (zswap-shrink) I 2 0 0 0 -1 "..., 2048) = 160
49789      0.000039 read(7</proc/194/status>, "Name:\\tzswap-shrink\\nUmask:\\t0000\\nS"..., 2048) = 948
49789      0.000049 read(7</proc/433/stat>, "433 (sdhci) I 2 0 0 0 -1 6923888"..., 2048) = 153
49789      0.000040 read(7</proc/433/status>, "Name:\\tsdhci\\nUmask:\\t0000\\nState:\\tI"..., 2048) = 941
49789      0.000050 read(7</proc/439/stat>, "439 (nvme-wq) I 2 0 0 0 -1 69238"..., 2048) = 155
49789      0.000040 read(7</proc/439/status>, "Name:\\tnvme-wq\\nUmask:\\t0000\\nState:"..., 2048) = 943
49789      0.000053 read(7</proc/440/stat>, "440 (nvme-reset-wq) I 2 0 0 0 -1"..., 2048) = 161
49789      0.000039 read(7</proc/440/status>, "Name:\\tnvme-reset-wq\\nUmask:\\t0000\\n"..., 2048) = 950
49789      0.000049 read(7</proc/441/stat>, "441 (nvme-delete-wq) I 2 0 0 0 -"..., 2048) = 162
49789      0.000039 read(7</proc/441/status>, "Name:\\tnvme-delete-wq\\nUmask:\\t0000"..., 2048) = 950
49789      0.000050 read(7</proc/489/stat>, "489 (kworker/7:1H-events_highpri"..., 2048) = 176
49789      0.000041 read(7</proc/489/status>, "Name:\\tkworker/7:1H-events_highpr"..., 2048) = 966
49789      0.000049 read(7</proc/501/stat>, "501 (kworker/6:1H-events_highpri"..., 2048) = 176
49789      0.000039 read(7</proc/501/status>, "Name:\\tkworker/6:1H-events_highpr"..., 2048) = 965
49789      0.000050 read(7</proc/502/stat>, "502 (kworker/4:1H-events_highpri"..., 2048) = 176
49789      0.000039 read(7</proc/502/status>, "Name:\\tkworker/4:1H-events_highpr"..., 2048) = 966
49789      0.000051 read(7</proc/870/stat>, "870 (kdmflush) I 2 0 0 0 -1 6923"..., 2048) = 157
49789      0.000039 read(7</proc/870/status>, "Name:\\tkdmflush\\nUmask:\\t0000\\nState"..., 2048) = 944
49789      0.000057 read(7</proc/871/stat>, "871 (kcryptd_io/253:) I 2 0 0 0 "..., 2048) = 164
49789      0.000040 read(7</proc/871/status>, "Name:\\tkcryptd_io/253:\\nUmask:\\t000"..., 2048) = 951
49789      0.000049 read(7</proc/873/stat>, "873 (kcryptd/253:0) I 2 0 0 0 -1"..., 2048) = 162
49789      0.000043 read(7</proc/873/status>, "Name:\\tkcryptd/253:0\\nUmask:\\t0000\\n"..., 2048) = 949
49789      0.000050 read(7</proc/874/stat>, "874 (dmcrypt_write/2) S 2 0 0 0 "..., 2048) = 167
49789      0.000039 read(7</proc/874/status>, "Name:\\tdmcrypt_write/2\\nUmask:\\t000"..., 2048) = 960
49789      0.000050 read(7</proc/940/stat>, "940 (kdmflush) I 2 0 0 0 -1 6923"..., 2048) = 157
49789      0.000039 read(7</proc/940/status>, "Name:\\tkdmflush\\nUmask:\\t0000\\nState"..., 2048) = 944
49789      0.000050 read(7</proc/949/stat>, "949 (kdmflush) I 2 0 0 0 -1 6923"..., 2048) = 157
49789      0.000040 read(7</proc/949/status>, "Name:\\tkdmflush\\nUmask:\\t0000\\nState"..., 2048) = 944
49789      0.000049 read(7</proc/965/stat>, "965 (kworker/1:1H-events_highpri"..., 2048) = 177
49789      0.000040 read(7</proc/965/status>, "Name:\\tkworker/1:1H-events_highpr"..., 2048) = 964
49789      0.000050 read(7</proc/970/stat>, "970 (jbd2/dm-1-8) S 2 0 0 0 -1 2"..., 2048) = 162
49789      0.000040 read(7</proc/970/status>, "Name:\\tjbd2/dm-1-8\\nUmask:\\t0000\\nSt"..., 2048) = 956
49789      0.000049 read(7</proc/971/stat>, "971 (ext4-rsv-conver) I 2 0 0 0 "..., 2048) = 164
49789      0.000040 read(7</proc/971/status>, "Name:\\text4-rsv-conver\\nUmask:\\t000"..., 2048) = 951
49789      0.000050 read(7</proc/1071/stat>, "1071 (systemd-journal) S 1 1071 "..., 2048) = 187
49789      0.000045 read(7</proc/1071/status>, "Name:\\tsystemd-journal\\nUmask:\\t002"..., 2048) = 1326
49789      0.000056 read(7</proc/1077/stat>, "1077 (kworker/5:1H-kblockd) I 2 "..., 2048) = 171
49789      0.000039 read(7</proc/1077/status>, "Name:\\tkworker/5:1H-kblockd\\nUmask"..., 2048) = 961
49789      0.000050 read(7</proc/1088/stat>, "1088 (kworker/3:1H-events_highpr"..., 2048) = 177
49789      0.000045 read(7</proc/1088/status>, "Name:\\tkworker/3:1H-events_highpr"..., 2048) = 968
49789      0.000054 read(7</proc/1089/stat>, "1089 (systemd-udevd) S 1 1089 10"..., 2048) = 190
49789      0.000045 read(7</proc/1089/status>, "Name:\\tsystemd-udevd\\nUmask:\\t0022\\n"..., 2048) = 1324
49789      0.000054 read(7</proc/1092/stat>, "1092 (kworker/0:1H-events_highpr"..., 2048) = 178
49789      0.000040 read(7</proc/1092/status>, "Name:\\tkworker/0:1H-events_highpr"..., 2048) = 969
49789      0.000049 read(7</proc/1093/stat>, "1093 (kworker/2:1H-kblockd) I 2 "..., 2048) = 170
49789      0.000040 read(7</proc/1093/status>, "Name:\\tkworker/2:1H-kblockd\\nUmask"..., 2048) = 961
49789      0.000049 read(7</proc/1146/stat>, "1146 (ktpacpid) I 2 0 0 0 -1 692"..., 2048) = 158
49789      0.000040 read(7</proc/1146/status>, "Name:\\tktpacpid\\nUmask:\\t0000\\nState"..., 2048) = 948
49789      0.000050 read(7</proc/1185/stat>, "1185 (cfg80211) I 2 0 0 0 -1 692"..., 2048) = 158
49789      0.000045 read(7</proc/1185/status>, "Name:\\tcfg80211\\nUmask:\\t0000\\nState"..., 2048) = 948
49789      0.000051 read(7</proc/1221/stat>, "1221 (irq/160-iwlwifi) S 2 0 0 0"..., 2048) = 166
49789      0.000038 read(7</proc/1221/status>, "Name:\\tirq/160-iwlwifi\\nUmask:\\t000"..., 2048) = 963
49789      0.000050 read(7</proc/1222/stat>, "1222 (irq/161-iwlwifi) S 2 0 0 0"..., 2048) = 166
49789      0.000040 read(7</proc/1222/status>, "Name:\\tirq/161-iwlwifi\\nUmask:\\t000"..., 2048) = 962
49789      0.000050 read(7</proc/1223/stat>, "1223 (irq/162-iwlwifi) S 2 0 0 0"..., 2048) = 166
49789      0.000039 read(7</proc/1223/status>, "Name:\\tirq/162-iwlwifi\\nUmask:\\t000"..., 2048) = 961
49789      0.000050 read(7</proc/1224/stat>, "1224 (irq/163-iwlwifi) S 2 0 0 0"..., 2048) = 166
49789      0.000039 read(7</proc/1224/status>, "Name:\\tirq/163-iwlwifi\\nUmask:\\t000"..., 2048) = 962
49789      0.000049 read(7</proc/1225/stat>, "1225 (irq/164-iwlwifi) S 2 0 0 0"..., 2048) = 166
49789      0.000039 read(7</proc/1225/status>, "Name:\\tirq/164-iwlwifi\\nUmask:\\t000"..., 2048) = 963
49789      0.000049 read(7</proc/1226/stat>, "1226 (irq/165-iwlwifi) S 2 0 0 0"..., 2048) = 166
49789      0.000045 read(7</proc/1226/status>, "Name:\\tirq/165-iwlwifi\\nUmask:\\t000"..., 2048) = 962
49789      0.000051 read(7</proc/1227/stat>, "1227 (irq/166-iwlwifi) S 2 0 0 0"..., 2048) = 166
49789      0.000040 read(7</proc/1227/status>, "Name:\\tirq/166-iwlwifi\\nUmask:\\t000"..., 2048) = 962
49789      0.000051 read(7</proc/1228/stat>, "1228 (irq/167-iwlwifi) S 2 0 0 0"..., 2048) = 167
49789      0.000040 read(7</proc/1228/status>, "Name:\\tirq/167-iwlwifi\\nUmask:\\t000"..., 2048) = 963
49789      0.000050 read(7</proc/1229/stat>, "1229 (irq/168-iwlwifi) S 2 0 0 0"..., 2048) = 166
49789      0.000040 read(7</proc/1229/status>, "Name:\\tirq/168-iwlwifi\\nUmask:\\t000"..., 2048) = 962
49789      0.000049 read(7</proc/1230/stat>, "1230 (irq/169-iwlwifi) S 2 0 0 0"..., 2048) = 165
49789      0.000039 read(7</proc/1230/status>, "Name:\\tirq/169-iwlwifi\\nUmask:\\t000"..., 2048) = 958
49789      0.000050 read(7</proc/1250/stat>, "1250 (kdmflush) I 2 0 0 0 -1 692"..., 2048) = 158
49789      0.000040 read(7</proc/1250/status>, "Name:\\tkdmflush\\nUmask:\\t0000\\nState"..., 2048) = 948
49789      0.000049 read(7</proc/1309/stat>, "1309 (jbd2/nvme0n1p9-) S 2 0 0 0"..., 2048) = 163
49789      0.000039 read(7</proc/1309/status>, "Name:\\tjbd2/nvme0n1p9-\\nUmask:\\t000"..., 2048) = 960
49789      0.000050 read(7</proc/1310/stat>, "1310 (ext4-rsv-conver) I 2 0 0 0"..., 2048) = 165
49789      0.000039 read(7</proc/1310/status>, "Name:\\text4-rsv-conver\\nUmask:\\t000"..., 2048) = 955
49789      0.000049 read(7</proc/1311/stat>, "1311 (jbd2/dm-3-8) S 2 0 0 0 -1 "..., 2048) = 163
49789      0.000039 read(7</proc/1311/status>, "Name:\\tjbd2/dm-3-8\\nUmask:\\t0000\\nSt"..., 2048) = 961
49789      0.000055 read(7</proc/1312/stat>, "1312 (ext4-rsv-conver) I 2 0 0 0"..., 2048) = 165
49789      0.000041 read(7</proc/1312/status>, "Name:\\text4-rsv-conver\\nUmask:\\t000"..., 2048) = 955
49789      0.000050 read(7</proc/1334/stat>, "1334 (auditd) S 1 1334 1334 0 -1"..., 2048) = 183
49789      0.000041 read(7</proc/1334/status>, "Name:\\tauditd\\nUmask:\\t0022\\nState:\\t"..., 2048) = 1315
49789      0.000063 read(7</proc/1336/stat>, "1336 (sedispatch) S 1334 1334 13"..., 2048) = 185
49789      0.000045 read(7</proc/1336/status>, "Name:\\tsedispatch\\nUmask:\\t0022\\nSta"..., 2048) = 1322
49789      0.000054 read(7</proc/1354/stat>, "1354 (rpciod) I 2 0 0 0 -1 69238"..., 2048) = 156
49789      0.000041 read(7</proc/1354/status>, "Name:\\trpciod\\nUmask:\\t0000\\nState:\\t"..., 2048) = 946
49789      0.000050 read(7</proc/1355/stat>, "1355 (xprtiod) I 2 0 0 0 -1 6923"..., 2048) = 157
49789      0.000039 read(7</proc/1355/status>, "Name:\\txprtiod\\nUmask:\\t0000\\nState:"..., 2048) = 947
49789      0.000050 read(7</proc/1357/stat>, "1357 (ModemManager) S 1 1357 135"..., 2048) = 179
49789      0.000041 read(7</proc/1357/status>, "Name:\\tModemManager\\nUmask:\\t0022\\nS"..., 2048) = 1323
49789      0.000076 read(7</proc/1359/stat>, "1359 (alsactl) S 1 1359 1359 0 -"..., 2048) = 170
49789      0.000043 read(7</proc/1359/status>, "Name:\\talsactl\\nUmask:\\t0022\\nState:"..., 2048) = 1313
49789      0.000056 read(7</proc/1360/stat>, "1360 (avahi-daemon) S 1 1360 136"..., 2048) = 178
49789      0.000041 read(7</proc/1360/status>, "Name:\\tavahi-daemon\\nUmask:\\t0022\\nS"..., 2048) = 1329
49789      0.000054 read(7</proc/1361/stat>, "1361 (bluetoothd) S 1 1361 1361 "..., 2048) = 175
49789      0.000041 read(7</proc/1361/status>, "Name:\\tbluetoothd\\nUmask:\\t0077\\nSta"..., 2048) = 1322
49789      0.000052 read(7</proc/1362/stat>, "1362 (boltd) S 1 1362 1362 0 -1 "..., 2048) = 172
49789      0.000041 read(7</proc/1362/status>, "Name:\\tboltd\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1317
49789      0.000054 read(7</proc/1365/stat>, "1365 (earlyoom) S 1 1365 1365 0 "..., 2048) = 172
49789      0.000040 read(7</proc/1365/status>, "Name:\\tearlyoom\\nUmask:\\t0022\\nState"..., 2048) = 1357
49789      0.000054 read(7</proc/1367/stat>, "1367 (firewalld) S 1 1367 1367 0"..., 2048) = 186
49789      0.000041 read(7</proc/1367/status>, "Name:\\tfirewalld\\nUmask:\\t0022\\nStat"..., 2048) = 1315
49789      0.000054 read(7</proc/1370/stat>, "1370 (irqbalance) S 1 1370 1370 "..., 2048) = 175
49789      0.000045 read(7</proc/1370/status>, "Name:\\tirqbalance\\nUmask:\\t0022\\nSta"..., 2048) = 1316
49789      0.000056 read(7</proc/1373/stat>, "1373 (mcelog) S 1 1373 1373 0 -1"..., 2048) = 169
49789      0.000041 read(7</proc/1373/status>, "Name:\\tmcelog\\nUmask:\\t0022\\nState:\\t"..., 2048) = 1310
49789      0.000053 read(7</proc/1375/stat>, "1375 (rsyslogd) S 1 1375 1375 0 "..., 2048) = 186
49789      0.000041 read(7</proc/1375/status>, "Name:\\trsyslogd\\nUmask:\\t0066\\nState"..., 2048) = 1313
49789      0.000053 read(7</proc/1381/stat>, "1381 (smartd) S 1 1381 1381 0 -1"..., 2048) = 174
49789      0.000041 read(7</proc/1381/status>, "Name:\\tsmartd\\nUmask:\\t0022\\nState:\\t"..., 2048) = 1311
49789      0.000054 read(7</proc/1383/stat>, "1383 (sssd) S 1 1383 1383 0 -1 4"..., 2048) = 177
49789      0.000040 read(7</proc/1383/status>, "Name:\\tsssd\\nUmask:\\t0177\\nState:\\tS "..., 2048) = 1310
49789      0.000053 read(7</proc/1388/stat>, "1388 (systemd-homed) S 1 1388 13"..., 2048) = 179
49789      0.000040 read(7</proc/1388/status>, "Name:\\tsystemd-homed\\nUmask:\\t0022\\n"..., 2048) = 1325
49789      0.000054 read(7</proc/1389/stat>, "1389 (systemd-machine) S 1 1389 "..., 2048) = 179
49789      0.000039 read(7</proc/1389/status>, "Name:\\tsystemd-machine\\nUmask:\\t002"..., 2048) = 1327
49789      0.000053 read(7</proc/1399/stat>, "1399 (avahi-daemon) S 1360 1360 "..., 2048) = 172
49789      0.000041 read(7</proc/1399/status>, "Name:\\tavahi-daemon\\nUmask:\\t0022\\nS"..., 2048) = 1327
49789      0.000054 read(7</proc/1415/stat>, "1415 (dbus-broker-lau) S 1 1415 "..., 2048) = 180
49789      0.000039 read(7</proc/1415/status>, "Name:\\tdbus-broker-lau\\nUmask:\\t002"..., 2048) = 1334
49789      0.000054 read(7</proc/1420/stat>, "1420 (chronyd) S 1 1419 1419 0 -"..., 2048) = 170
49789      0.000040 read(7</proc/1420/status>, "Name:\\tchronyd\\nUmask:\\t0022\\nState:"..., 2048) = 1327
49789      0.000054 read(7</proc/1427/stat>, "1427 (abrtd) S 1 1427 1427 0 -1 "..., 2048) = 173
49789      0.000045 read(7</proc/1427/status>, "Name:\\tabrtd\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1310
49789      0.000075 read(7</proc/1429/stat>, "1429 (sssd_be) S 1383 1429 1383 "..., 2048) = 182
49789      0.000041 read(7</proc/1429/status>, "Name:\\tsssd_be\\nUmask:\\t0177\\nState:"..., 2048) = 1316
49789      0.000054 read(7</proc/1430/stat>, "1430 (dbus-broker) S 1415 1415 1"..., 2048) = 181
49789      0.000040 read(7</proc/1430/status>, "Name:\\tdbus-broker\\nUmask:\\t0022\\nSt"..., 2048) = 1336
49789      0.000054 read(7</proc/1444/stat>, "1444 (sssd_nss) S 1383 1444 1383"..., 2048) = 185
49789      0.000041 read(7</proc/1444/status>, "Name:\\tsssd_nss\\nUmask:\\t0177\\nState"..., 2048) = 1318
49789      0.000052 read(7</proc/1446/stat>, "1446 (polkitd) S 1 1446 1446 0 -"..., 2048) = 194
49789      0.000043 read(7</proc/1446/status>, "Name:\\tpolkitd\\nUmask:\\t0022\\nState:"..., 2048) = 1336
49789      0.000062 read(7</proc/1501/stat>, "1501 (systemd-logind) S 1 1501 1"..., 2048) = 181
49789      0.000042 read(7</proc/1501/status>, "Name:\\tsystemd-logind\\nUmask:\\t0022"..., 2048) = 1327
49789      0.000053 read(7</proc/1505/stat>, "1505 (abrt-dump-journ) S 1 1505 "..., 2048) = 193
49789      0.000040 read(7</proc/1505/status>, "Name:\\tabrt-dump-journ\\nUmask:\\t002"..., 2048) = 1320
49789      0.000053 read(7</proc/1506/stat>, "1506 (abrt-dump-journ) S 1 1506 "..., 2048) = 194
49789      0.000041 read(7</proc/1506/status>, "Name:\\tabrt-dump-journ\\nUmask:\\t002"..., 2048) = 1320
49789      0.000052 read(7</proc/1507/stat>, "1507 (abrt-dump-journ) S 1 1507 "..., 2048) = 196
49789      0.000040 read(7</proc/1507/status>, "Name:\\tabrt-dump-journ\\nUmask:\\t002"..., 2048) = 1321
49789      0.000052 read(7</proc/1508/stat>, "1508 (systemd-userdbd) S 1 1508 "..., 2048) = 186
49789      0.000041 read(7</proc/1508/status>, "Name:\\tsystemd-userdbd\\nUmask:\\t002"..., 2048) = 1325
49789      0.000052 read(7</proc/1513/stat>, "1513 (NetworkManager) S 1 1513 1"..., 2048) = 187
49789      0.000040 read(7</proc/1513/status>, "Name:\\tNetworkManager\\nUmask:\\t0022"..., 2048) = 1323
49789      0.000056 read(7</proc/1529/stat>, "1529 (cupsd) S 1 1529 1529 0 -1 "..., 2048) = 170
49789      0.000042 read(7</proc/1529/status>, "Name:\\tcupsd\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1309
49789      0.000054 read(7</proc/1534/stat>, "1534 (gssproxy) S 1 1534 1534 0 "..., 2048) = 169
49789      0.000040 read(7</proc/1534/status>, "Name:\\tgssproxy\\nUmask:\\t0177\\nState"..., 2048) = 1311
49789      0.000053 read(7</proc/1836/stat>, "1836 (wpa_supplicant) S 1 1836 1"..., 2048) = 184
49789      0.000041 read(7</proc/1836/status>, "Name:\\twpa_supplicant\\nUmask:\\t0022"..., 2048) = 1320
49789      0.000053 read(7</proc/2410/stat>, "2410 (atd) S 1 2410 2410 0 -1 41"..., 2048) = 163
49789      0.000041 read(7</proc/2410/status>, "Name:\\tatd\\nUmask:\\t0022\\nState:\\tS ("..., 2048) = 1307
49789      0.000053 read(7</proc/2412/stat>, "2412 (crond) S 1 2412 2412 0 -1 "..., 2048) = 181
49789      0.000040 read(7</proc/2412/status>, "Name:\\tcrond\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1310
49789      0.000053 read(7</proc/2419/stat>, "2419 (systemd) S 1 2419 2419 0 -"..., 2048) = 316
49789      0.000043 read(7</proc/2419/status>, "Name:\\tsystemd\\nUmask:\\t0022\\nState:"..., 2048) = 1344
49789      0.000054 read(7</proc/2430/stat>, "2430 (login) S 1 2430 2430 0 -1 "..., 2048) = 174
49789      0.000041 read(7</proc/2430/status>, "Name:\\tlogin\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1330
49789      0.000054 read(7</proc/2432/stat>, "2432 ((sd-pam)) S 2419 2419 2419"..., 2048) = 173
49789      0.000040 read(7</proc/2432/status>, "Name:\\t(sd-pam)\\nUmask:\\t0022\\nState"..., 2048) = 1337
49789      0.000053 read(7</proc/2480/stat>, "2480 (sway) S 2430 2480 2480 102"..., 2048) = 333
49789      0.000043 read(7</proc/2480/status>, "Name:\\tsway\\nUmask:\\t0002\\nState:\\tS "..., 2048) = 1350
49789      0.000054 read(7</proc/2568/stat>, "2568 (swaybg) S 1 2480 2480 1025"..., 2048) = 313
49789      0.000040 read(7</proc/2568/status>, "Name:\\tswaybg\\nUmask:\\t0002\\nState:\\t"..., 2048) = 1340
49789      0.000057 read(7</proc/2570/stat>, "2570 (swaybar) S 1 2480 2480 102"..., 2048) = 316
49789      0.000048 read(7</proc/2570/status>, "Name:\\tswaybar\\nUmask:\\t0002\\nState:"..., 2048) = 1345
49789      0.000057 read(7</proc/2572/stat>, "2572 (mako) S 1 2571 2571 0 -1 4"..., 2048) = 303
49789      0.000041 read(7</proc/2572/status>, "Name:\\tmako\\nUmask:\\t0002\\nState:\\tS "..., 2048) = 1338
49789      0.000053 read(7</proc/2574/stat>, "2574 (swayidle) S 1 2573 2573 0 "..., 2048) = 308
49789      0.000041 read(7</proc/2574/status>, "Name:\\tswayidle\\nUmask:\\t0002\\nState"..., 2048) = 1342
49789      0.000053 read(7</proc/2575/stat>, "2575 (sh) S 2570 2480 2480 1025 "..., 2048) = 330
49789      0.000042 read(7</proc/2575/status>, "Name:\\tsh\\nUmask:\\t0002\\nState:\\tS (s"..., 2048) = 1342
49789      0.000054 read(7</proc/2576/stat>, "2576 (dbus-broker-lau) S 2419 25"..., 2048) = 317
49789      0.000042 read(7</proc/2576/status>, "Name:\\tdbus-broker-lau\\nUmask:\\t002"..., 2048) = 1353
49789      0.000054 read(7</proc/2594/stat>, "2594 (dbus-broker) S 2576 2576 2"..., 2048) = 311
49789      0.000041 read(7</proc/2594/status>, "Name:\\tdbus-broker\\nUmask:\\t0022\\nSt"..., 2048) = 1349
49789      0.000053 read(7</proc/2615/stat>, "2615 (pulseaudio) S 2419 2615 26"..., 2048) = 325
49789      0.000042 read(7</proc/2615/status>, "Name:\\tpulseaudio\\nUmask:\\t0077\\nSta"..., 2048) = 1359
49789      0.000054 read(7</proc/2616/stat>, "2616 (rtkit-daemon) S 1 2616 261"..., 2048) = 172
49789      0.000040 read(7</proc/2616/status>, "Name:\\trtkit-daemon\\nUmask:\\t0777\\nS"..., 2048) = 1332
49789      0.000054 read(7</proc/2628/stat>, "2628 (krfcommd) S 2 0 0 0 -1 213"..., 2048) = 158
49789      0.000040 read(7</proc/2628/status>, "Name:\\tkrfcommd\\nUmask:\\t0000\\nState"..., 2048) = 952
49789      0.000052 read(7</proc/2645/stat>, "2645 (Xwayland) S 1 2480 2480 10"..., 2048) = 337
49789      0.000045 read(7</proc/2645/status>, "Name:\\tXwayland\\nUmask:\\t0002\\nState"..., 2048) = 1350
49789      0.000054 read(7</proc/4467/stat>, "4467 (alacritty) S 1 4466 4466 0"..., 2048) = 323
49789      0.000045 read(7</proc/4467/status>, "Name:\\talacritty\\nUmask:\\t0002\\nStat"..., 2048) = 1350
49789      0.000059 read(7</proc/4472/stat>, "4472 (bash) S 4467 4472 4472 348"..., 2048) = 333
49789      0.000051 read(7</proc/4472/status>, "Name:\\tbash\\nUmask:\\t0002\\nState:\\tS "..., 2048) = 1342
49789      0.000054 read(7</proc/4692/stat>, "4692 (tmux: client) S 4472 4692 "..., 2048) = 331
49789      0.000043 read(7</proc/4692/status>, "Name:\\ttmux: client\\nUmask:\\t0002\\nS"..., 2048) = 1349
49789      0.000054 read(7</proc/4694/stat>, "4694 (tmux: server) S 1 4694 469"..., 2048) = 340
49789      0.000041 read(7</proc/4694/status>, "Name:\\ttmux: server\\nUmask:\\t0002\\nS"..., 2048) = 1351
49789      0.000053 read(7</proc/7330/stat>, "7330 (MainThread) S 1 7329 7329 "..., 2048) = 348
49789      0.000054 read(7</proc/7330/status>, "Name:\\tMainThread\\nUmask:\\t0002\\nSta"..., 2048) = 1354
49789      0.000054 read(7</proc/7369/stat>, "7369 (gvfsd) S 2419 7369 7369 0 "..., 2048) = 311
49789      0.000040 read(7</proc/7369/status>, "Name:\\tgvfsd\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1343
49789      0.000052 read(7</proc/7374/stat>, "7374 (gvfsd-fuse) S 2419 7369 73"..., 2048) = 321
49789      0.000042 read(7</proc/7374/status>, "Name:\\tgvfsd-fuse\\nUmask:\\t0022\\nSta"..., 2048) = 1346
49789      0.000054 read(7</proc/7403/stat>, "7403 (at-spi-bus-laun) S 2419 74"..., 2048) = 322
49789      0.000040 read(7</proc/7403/status>, "Name:\\tat-spi-bus-laun\\nUmask:\\t002"..., 2048) = 1352
49789      0.000057 read(7</proc/7463/stat>, "7463 (dbus-broker-lau) S 7403 74"..., 2048) = 317
49789      0.000041 read(7</proc/7463/status>, "Name:\\tdbus-broker-lau\\nUmask:\\t002"..., 2048) = 1352
49789      0.000053 read(7</proc/7464/stat>, "7464 (dbus-broker) S 7463 7403 7"..., 2048) = 311
49789      0.000041 read(7</proc/7464/status>, "Name:\\tdbus-broker\\nUmask:\\t0022\\nSt"..., 2048) = 1348
49789      0.000054 read(7</proc/7465/stat>, "7465 (at-spi2-registr) S 2419 74"..., 2048) = 317
49789      0.000055 read(7</proc/7465/status>, "Name:\\tat-spi2-registr\\nUmask:\\t002"..., 2048) = 1352
49789      0.000214 read(7</proc/7474/stat>, "7474 (pcscd) S 1 7474 7474 0 -1 "..., 2048) = 173
49789      0.000047 read(7</proc/7474/status>, "Name:\\tpcscd\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1309
49789      0.000055 read(7</proc/7501/stat>, "7501 (WebExtensions) S 7330 7329"..., 2048) = 341
49789      0.000048 read(7</proc/7501/status>, "Name:\\tWebExtensions\\nUmask:\\t0002\\n"..., 2048) = 1363
49789      0.000054 read(7</proc/7578/stat>, "7578 (Privileged Cont) S 7330 73"..., 2048) = 336
49789      0.000047 read(7</proc/7578/status>, "Name:\\tPrivileged Cont\\nUmask:\\t000"..., 2048) = 1363
49789      0.000054 read(7</proc/7638/stat>, "7638 (file:// Content) S 7330 73"..., 2048) = 341
49789      0.000045 read(7</proc/7638/status>, "Name:\\tfile:// Content\\nUmask:\\t000"..., 2048) = 1365
49789      0.000053 read(7</proc/11407/stat>, "11407 (upowerd) S 1 11407 11407 "..., 2048) = 179
49789      0.000041 read(7</proc/11407/status>, "Name:\\tupowerd\\nUmask:\\t0022\\nState:"..., 2048) = 1324
49789      0.000054 read(7</proc/17046/stat>, "17046 (kworker/4:0-events) I 2 0"..., 2048) = 172
49789      0.000041 read(7</proc/17046/status>, "Name:\\tkworker/4:0-events\\nUmask:\\t"..., 2048) = 966
49789      0.000052 read(7</proc/18802/stat>, "18802 (kworker/u16:6-kcryptd/253"..., 2048) = 182
49789      0.000041 read(7</proc/18802/status>, "Name:\\tkworker/u16:6-kcryptd/253:"..., 2048) = 976
49789      0.000098 read(7</proc/18823/stat>, "18823 (irq/130-mei_me) S 2 0 0 0"..., 2048) = 168
49789      0.000046 read(7</proc/18823/status>, "Name:\\tirq/130-mei_me\\nUmask:\\t0000"..., 2048) = 961
49789      0.000060 read(7</proc/18826/stat>, "18826 (kworker/u16:32-kcryptd/25"..., 2048) = 182
49789      0.000041 read(7</proc/18826/status>, "Name:\\tkworker/u16:32-kcryptd/253"..., 2048) = 975
49789      0.000050 read(7</proc/18827/stat>, "18827 (kworker/u16:35-kcryptd/25"..., 2048) = 183
49789      0.000040 read(7</proc/18827/status>, "Name:\\tkworker/u16:35-kcryptd/253"..., 2048) = 976
49789      0.000050 read(7</proc/18828/stat>, "18828 (kworker/u16:36-kcryptd/25"..., 2048) = 183
49789      0.000040 read(7</proc/18828/status>, "Name:\\tkworker/u16:36-kcryptd/253"..., 2048) = 976
49789      0.000050 read(7</proc/18829/stat>, "18829 (kworker/u16:37-kcryptd/25"..., 2048) = 183
49789      0.000039 read(7</proc/18829/status>, "Name:\\tkworker/u16:37-kcryptd/253"..., 2048) = 977
49789      0.000050 read(7</proc/18830/stat>, "18830 (kworker/u16:38-events_unb"..., 2048) = 184
49789      0.000039 read(7</proc/18830/status>, "Name:\\tkworker/u16:38-events_unbo"..., 2048) = 977
49789      0.000052 read(7</proc/18839/stat>, "18839 (irq/129-mmc0) S 2 0 0 0 -"..., 2048) = 166
49789      0.000040 read(7</proc/18839/status>, "Name:\\tirq/129-mmc0\\nUmask:\\t0000\\nS"..., 2048) = 958
49789      0.000051 read(7</proc/22280/stat>, "22280 (kworker/u17:0-rb_allocato"..., 2048) = 182
49789      0.000040 read(7</proc/22280/status>, "Name:\\tkworker/u17:0-rb_allocator"..., 2048) = 976
49789      0.000050 read(7</proc/23300/stat>, "23300 (kworker/u16:0-kcryptd/253"..., 2048) = 182
49789      0.000045 read(7</proc/23300/status>, "Name:\\tkworker/u16:0-kcryptd/253:"..., 2048) = 975
49789      0.000052 read(7</proc/26647/stat>, "26647 (bash) S 4694 26647 26647 "..., 2048) = 342
49789      0.000042 read(7</proc/26647/status>, "Name:\\tbash\\nUmask:\\t0002\\nState:\\tS "..., 2048) = 1350
49789      0.000055 read(7</proc/30339/stat>, "30339 (kworker/7:2-events) I 2 0"..., 2048) = 171
49789      0.000040 read(7</proc/30339/status>, "Name:\\tkworker/7:2-events\\nUmask:\\t"..., 2048) = 963
49789      0.000050 read(7</proc/30643/stat>, "30643 (kworker/u16:1-kcryptd/253"..., 2048) = 182
49789      0.000042 read(7</proc/30643/status>, "Name:\\tkworker/u16:1-kcryptd/253:"..., 2048) = 974
49789      0.000052 read(7</proc/33625/stat>, "33625 (kworker/5:2-events) I 2 0"..., 2048) = 171
49789      0.000044 read(7</proc/33625/status>, "Name:\\tkworker/5:2-events\\nUmask:\\t"..., 2048) = 962
49789      0.000052 read(7</proc/34541/stat>, "34541 (sd_dummy) S 1 7329 7329 0"..., 2048) = 306
49789      0.000044 read(7</proc/34541/status>, "Name:\\tsd_dummy\\nUmask:\\t0007\\nState"..., 2048) = 1346
49789      0.000053 read(7</proc/34544/stat>, "34544 (sd_espeak-ng) S 1 7329 73"..., 2048) = 311
49789      0.000041 read(7</proc/34544/status>, "Name:\\tsd_espeak-ng\\nUmask:\\t0007\\nS"..., 2048) = 1351
49789      0.000053 read(7</proc/34551/stat>, "34551 (sd_generic) S 1 7329 7329"..., 2048) = 308
49789      0.000041 read(7</proc/34551/status>, "Name:\\tsd_generic\\nUmask:\\t0007\\nSta"..., 2048) = 1348
49789      0.000053 read(7</proc/34554/stat>, "34554 (sd_generic) S 1 7329 7329"..., 2048) = 309
49789      0.000040 read(7</proc/34554/status>, "Name:\\tsd_generic\\nUmask:\\t0007\\nSta"..., 2048) = 1347
49789      0.000052 read(7</proc/34557/stat>, "34557 (speech-dispatch) S 1 3455"..., 2048) = 319
49789      0.000041 read(7</proc/34557/status>, "Name:\\tspeech-dispatch\\nUmask:\\t000"..., 2048) = 1355
49789      0.000053 read(7</proc/34645/stat>, "34645 (kworker/u16:2-kcryptd/253"..., 2048) = 182
49789      0.000040 read(7</proc/34645/status>, "Name:\\tkworker/u16:2-kcryptd/253:"..., 2048) = 975
49789      0.000050 read(7</proc/34732/stat>, "34732 (kworker/2:2-events) I 2 0"..., 2048) = 171
49789      0.000040 read(7</proc/34732/status>, "Name:\\tkworker/2:2-events\\nUmask:\\t"..., 2048) = 961
49789      0.000050 read(7</proc/38920/stat>, "38920 (kworker/3:2-events) I 2 0"..., 2048) = 171
49789      0.000040 read(7</proc/38920/status>, "Name:\\tkworker/3:2-events\\nUmask:\\t"..., 2048) = 964
49789      0.000050 read(7</proc/39440/stat>, "39440 (kworker/0:0-events) I 2 0"..., 2048) = 171
49789      0.000040 read(7</proc/39440/status>, "Name:\\tkworker/0:0-events\\nUmask:\\t"..., 2048) = 962
49789      0.000062 read(7</proc/39567/stat>, "39567 (kworker/6:2-events) I 2 0"..., 2048) = 172
49789      0.000041 read(7</proc/39567/status>, "Name:\\tkworker/6:2-events\\nUmask:\\t"..., 2048) = 964
49789      0.000050 read(7</proc/40480/stat>, "40480 (kworker/7:1-events) I 2 0"..., 2048) = 171
49789      0.000039 read(7</proc/40480/status>, "Name:\\tkworker/7:1-events\\nUmask:\\t"..., 2048) = 963
49789      0.000056 read(7</proc/40744/stat>, "40744 (kworker/u17:1-i915_flip) "..., 2048) = 178
49789      0.000041 read(7</proc/40744/status>, "Name:\\tkworker/u17:1-i915_flip\\nUm"..., 2048) = 973
49789      0.000051 read(7</proc/41903/stat>, "41903 (Web Content) S 7330 7329 "..., 2048) = 329
49789      0.000044 read(7</proc/41903/status>, "Name:\\tWeb Content\\nUmask:\\t0002\\nSt"..., 2048) = 1361
49789      0.000066 read(7</proc/42030/stat>, "42030 (kworker/3:0-events) I 2 0"..., 2048) = 171
49789      0.000044 read(7</proc/42030/status>, "Name:\\tkworker/3:0-events\\nUmask:\\t"..., 2048) = 964
49789      0.000051 read(7</proc/42424/stat>, "42424 (kworker/1:1-events) I 2 0"..., 2048) = 171
49789      0.000040 read(7</proc/42424/status>, "Name:\\tkworker/1:1-events\\nUmask:\\t"..., 2048) = 962
49789      0.000050 read(7</proc/42690/stat>, "42690 (kworker/4:2-events) I 2 0"..., 2048) = 171
49789      0.000040 read(7</proc/42690/status>, "Name:\\tkworker/4:2-events\\nUmask:\\t"..., 2048) = 963
49789      0.000049 read(7</proc/44003/stat>, "44003 (kworker/5:1-events) I 2 0"..., 2048) = 171
49789      0.000039 read(7</proc/44003/status>, "Name:\\tkworker/5:1-events\\nUmask:\\t"..., 2048) = 963
49789      0.000049 read(7</proc/45799/stat>, "45799 (kworker/0:2-events) I 2 0"..., 2048) = 171
49789      0.000039 read(7</proc/45799/status>, "Name:\\tkworker/0:2-events\\nUmask:\\t"..., 2048) = 963
49789      0.000054 read(7</proc/46011/stat>, "46011 (kworker/1:2-events) I 2 0"..., 2048) = 171
49789      0.000040 read(7</proc/46011/status>, "Name:\\tkworker/1:2-events\\nUmask:\\t"..., 2048) = 963
49789      0.000050 read(7</proc/46752/stat>, "46752 (kworker/6:0-events) I 2 0"..., 2048) = 172
49789      0.000043 read(7</proc/46752/status>, "Name:\\tkworker/6:0-events\\nUmask:\\t"..., 2048) = 964
49789      0.000051 read(7</proc/46847/stat>, "46847 (kworker/2:0-mm_percpu_wq)"..., 2048) = 177
49789      0.000039 read(7</proc/46847/status>, "Name:\\tkworker/2:0-mm_percpu_wq\\nU"..., 2048) = 969
49789      0.000054 read(7</proc/47157/stat>, "47157 (kworker/3:1) I 2 0 0 0 -1"..., 2048) = 164
49789      0.000039 read(7</proc/47157/status>, "Name:\\tkworker/3:1\\nUmask:\\t0000\\nSt"..., 2048) = 953
49789      0.000050 read(7</proc/47377/stat>, "47377 (kworker/7:0-events) I 2 0"..., 2048) = 171
49789      0.000039 read(7</proc/47377/status>, "Name:\\tkworker/7:0-events\\nUmask:\\t"..., 2048) = 963
49789      0.000050 read(7</proc/47378/stat>, "47378 (kworker/u16:3-events_unbo"..., 2048) = 181
49789      0.000039 read(7</proc/47378/status>, "Name:\\tkworker/u16:3-events_unbou"..., 2048) = 974
49789      0.000050 read(7</proc/47845/stat>, "47845 (kworker/5:0-events) I 2 0"..., 2048) = 171
49789      0.000039 read(7</proc/47845/status>, "Name:\\tkworker/5:0-events\\nUmask:\\t"..., 2048) = 963
49789      0.000050 read(7</proc/48519/stat>, "48519 (kworker/u17:2) I 2 0 0 0 "..., 2048) = 167
49789      0.000044 read(7</proc/48519/status>, "Name:\\tkworker/u17:2\\nUmask:\\t0000\\n"..., 2048) = 957
49789      0.000050 read(7</proc/49440/stat>, "49440 (kworker/1:0-events) I 2 0"..., 2048) = 171
49789      0.000039 read(7</proc/49440/status>, "Name:\\tkworker/1:0-events\\nUmask:\\t"..., 2048) = 962
49789      0.000049 read(7</proc/49549/stat>, "49549 (systemd-userwor) S 1508 1"..., 2048) = 179
49789      0.000040 read(7</proc/49549/status>, "Name:\\tsystemd-userwor\\nUmask:\\t002"..., 2048) = 1330
49789      0.000055 read(7</proc/49638/stat>, "49638 (systemd-userwor) S 1508 1"..., 2048) = 179
49789      0.000039 read(7</proc/49638/status>, "Name:\\tsystemd-userwor\\nUmask:\\t002"..., 2048) = 1329
49789      0.000053 read(7</proc/49639/stat>, "49639 (systemd-userwor) S 1508 1"..., 2048) = 179
49789      0.000040 read(7</proc/49639/status>, "Name:\\tsystemd-userwor\\nUmask:\\t002"..., 2048) = 1329
49789      0.000055 read(7</proc/49765/stat>, "49765 (sleep) S 2575 2480 2480 1"..., 2048) = 314
49789      0.000046 read(7</proc/49765/status>, "Name:\\tsleep\\nUmask:\\t0002\\nState:\\tS"..., 2048) = 1345
49789      0.000056 read(7</proc/49772/stat>, "49772 (strace-cmd) S 26647 49772"..., 2048) = 327
49789      0.000041 read(7</proc/49772/status>, "Name:\\tstrace-cmd\\nUmask:\\t0002\\nSta"..., 2048) = 1354
49789      0.000054 read(7</proc/49773/stat>, "49773 (strace) S 49772 49772 266"..., 2048) = 329
49789      0.000045 read(7</proc/49773/status>, "Name:\\tstrace\\nUmask:\\t0002\\nState:\\t"..., 2048) = 1353
49789      0.000054 read(7</proc/49777/stat>, "49777 (system-summary) S 49773 4"..., 2048) = 330
49789      0.000042 read(7</proc/49777/status>, "Name:\\tsystem-summary\\nUmask:\\t0002"..., 2048) = 1364
49789      0.000054 read(7</proc/49788/stat>, "49788 (system-summary) S 49777 4"..., 2048) = 331
49789      0.000041 read(7</proc/49788/status>, "Name:\\tsystem-summary\\nUmask:\\t0002"..., 2048) = 1363
49789      0.000053 read(7</proc/49789/stat>, "49789 (ps) R 49788 49772 26647 3"..., 2048) = 320
49789      0.000041 read(7</proc/49789/status>, "Name:\\tps\\nUmask:\\t0002\\nState:\\tR (r"..., 2048) = 1351
49789      0.000053 read(7</proc/49790/stat>, "49790 (tail) S 49788 49772 26647"..., 2048) = 313
49789      0.000041 read(7</proc/49790/status>, "Name:\\ttail\\nUmask:\\t0002\\nState:\\tS "..., 2048) = 1353
49789      0.000054 read(7</proc/49791/stat>, "49791 (system-summary) S 49788 4"..., 2048) = 326
49789      0.000040 read(7</proc/49791/status>, "Name:\\tsystem-summary\\nUmask:\\t0002"..., 2048) = 1362
49789      0.000234 write(1<pipe:[296266]>, "COMMAND         %CPU\\nsystemd    "..., 4096) = 4096
49790      0.000022 <... read resumed>"COMMAND         %CPU\\nsystemd    "..., 8192) = 4096
49790      0.000016 read(0<pipe:[296266]>,  <unfinished ...>
49789      0.000034 write(1<pipe:[296266]>, "worker/0:0-eve  0.0\\nkworker/6:2-"..., 734 <unfinished ...>
49790      0.000020 <... read resumed>"worker/0:0-eve  0.0\\nkworker/6:2-"..., 8192) = 734
49789      0.000004 <... write resumed>) = 734
49790      0.000006 read(0<pipe:[296266]>, "", 8192) = 0
49790      0.000047 write(1<pipe:[296267]>, "MainThread       1.9\\n", 21) = 21
49791      0.000019 <... read resumed>"M", 1) = 1
49791      0.000014 read(0<pipe:[296267]>, "a", 1) = 1
49791      0.000020 read(0<pipe:[296267]>, "i", 1) = 1
49791      0.000016 read(0<pipe:[296267]>, "n", 1) = 1
49791      0.000018 read(0<pipe:[296267]>, "T", 1) = 1
49791      0.000018 read(0<pipe:[296267]>, "h", 1) = 1
49791      0.000018 read(0<pipe:[296267]>, "r", 1) = 1
49791      0.000023 read(0<pipe:[296267]>,  <unfinished ...>
49789      0.000005 +++ exited with 0 +++
49790      0.000001 +++ exited with 0 +++
49791      0.000002 <... read resumed>"e", 1) = 1
49791      0.000006 read(0<pipe:[296267]>, "a", 1) = 1
49791      0.000015 read(0<pipe:[296267]>, "d", 1) = 1
49791      0.000017 read(0<pipe:[296267]>, " ", 1) = 1
49791      0.000016 read(0<pipe:[296267]>, " ", 1) = 1
49791      0.000016 read(0<pipe:[296267]>, " ", 1) = 1
49791      0.000016 read(0<pipe:[296267]>, " ", 1) = 1
49791      0.000016 read(0<pipe:[296267]>, " ", 1) = 1
49791      0.000016 read(0<pipe:[296267]>, " ", 1) = 1
49791      0.000016 read(0<pipe:[296267]>, " ", 1) = 1
49791      0.000016 read(0<pipe:[296267]>, "1", 1) = 1
49791      0.000016 read(0<pipe:[296267]>, ".", 1) = 1
49791      0.000016 read(0<pipe:[296267]>, "9", 1) = 1
49791      0.000016 read(0<pipe:[296267]>, "\\n", 1) = 1
49791      0.000241 write(1<pipe:[295181]>, "MainThread: \\33[0;32m1%\\33[0m", 25) = 25
49777      0.000019 <... read resumed>"MainThread: \\33[0;32m1%\\33[0m", 128) = 25
49777      0.000015 read(4<pipe:[295181]>,  <unfinished ...>
49791      0.000094 +++ exited with 0 +++
49788      0.000059 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49789, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000144 <... read resumed>"", 128) = 0
49788      0.000003 +++ exited with 0 +++
49777      0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49788, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000253 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49792
49777      0.000110 read(4<pipe:[295182]>, "", 128) = 0
49792      0.000333 +++ exited with 1 +++
49777      0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49792, si_uid=1000, si_status=1, si_utime=0, si_stime=0} ---
49777      0.000179 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49793
49777      0.000091 read(4<pipe:[295183]>,  <unfinished ...>
49793      0.000226 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49794
49793      0.000129 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49795
49794      0.000412 execve("/usr/bin/nmcli", ["nmcli", "--get-values", "NAME", "--color", "no", "connection", "show", "--active"], 0x5615639e02e0 /* 93 vars */ <unfinished ...>
49795      0.000085 execve("/usr/bin/sed", ["sed", "\\n      :start\\n      $!{\\n        "...], 0x5615639e02e0 /* 93 vars */ <unfinished ...>
49794      0.000049 <... execve resumed>) = 0
49795      0.000071 <... execve resumed>) = 0
49794      0.000070 read(4</usr/lib64/libnm.so.0.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\360\\206\\4\\0\\0\\0\\0\\0"..., 832) = 832
49795      0.000067 read(4</usr/lib64/libacl.so.1.1.2253>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20'\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000109 read(4</usr/lib64/libreadline.so.8.0>,  <unfinished ...>
49795      0.000007 read(4</usr/lib64/libselinux.so.1>,  <unfinished ...>
49794      0.000006 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\220\\222\\1\\0\\0\\0\\0\\0"..., 832) = 832
49795      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\207\\0\\0\\0\\0\\0\\0"..., 832) = 832
49795      0.000094 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000024 read(4</usr/lib64/libpolkit-agent-1.so.0.0.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320T\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000124 read(4</usr/lib64/libpolkit-gobject-1.so.0.0.0>,  <unfinished ...>
49795      0.000011 read(4</usr/lib64/libattr.so.1.1.2448>,  <unfinished ...>
49794      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260\\220\\0\\0\\0\\0\\0\\0"..., 832) = 832
49795      0.000004 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
49795      0.000093 read(4</usr/lib64/libpcre2-8.so.0.10.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\2604\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000016 read(4</usr/lib64/libgio-2.0.so.0.6400.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\220\\363\\3\\0\\0\\0\\0\\0"..., 832) = 832
49795      0.000076 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000033 read(4</usr/lib64/libgobject-2.0.so.0.6400.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260\\336\\0\\0\\0\\0\\0\\0"..., 832) = 832
49795      0.000066 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000053 read(4</usr/lib64/libglib-2.0.so.0.6400.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000\\333\\1\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000130 read(4</usr/lib64/libgcc_s-10-20200723.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3605\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000116 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000132 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000164 read(4</usr/lib64/libgnutls.so.30.28.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0@z\\3\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000120 read(4</usr/lib64/libgmodule-2.0.so.0.6400.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0P\\24\\0\\0\\0\\0\\0\\0"..., 832) = 832
49795      0.000034 read(0<pipe:[296283]>,  <unfinished ...>
49794      0.000073 read(4</usr/lib64/libuuid.so.1.3.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20&\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000114 read(4</usr/lib64/libudev.so.1.6.17>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260N\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000094 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000102 read(4</usr/lib64/libtinfo.so.6.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0P\\364\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000106 read(4</usr/lib64/libsystemd.so.0.28.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320B\\1\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000119 read(4</usr/lib64/libexpat.so.1.6.10>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\360B\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000117 read(4</usr/lib64/libz.so.1.2.11>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3605\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000122 read(4</usr/lib64/libmount.so.1.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20\\366\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000105 read(4</usr/lib64/libselinux.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\207\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000105 read(4</usr/lib64/libresolv-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000G\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000117 read(4</usr/lib64/libffi.so.6.0.2>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\300\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000109 read(4</usr/lib64/libpcre.so.1.2.12>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260#\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000108 read(4</usr/lib64/libp11-kit.so.0.3.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20\\261\\2\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000121 read(4</usr/lib64/libidn2.so.0.3.7>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260%\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000106 read(4</usr/lib64/libunistring.so.2.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\00002\\1\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000106 read(4</usr/lib64/libtasn1.so.6.6.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3606\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000106 read(4</usr/lib64/libnettle.so.7.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200\\252\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000100 read(4</usr/lib64/libhogweed.so.5.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0 \\216\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000109 read(4</usr/lib64/libgmp.so.10.3.2>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\0\\4\\1\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000117 read(4</usr/lib64/librt-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\0207\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000121 read(4</usr/lib64/liblzma.so.5.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3609\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000120 read(4</usr/lib64/liblz4.so.1.9.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000109 read(4</usr/lib64/libgcrypt.so.20.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\300\\305\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000109 read(4</usr/lib64/libblkid.so.1.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\360\\255\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000120 read(4</usr/lib64/libpcre2-8.so.0.10.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\2604\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.000110 read(4</usr/lib64/libgpg-error.so.0.27.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320L\\0\\0\\0\\0\\0\\0"..., 832) = 832
49794      0.004089 read(4</proc/sys/crypto/fips_enabled>, "0\\n", 1024) = 2
49794      0.000105 read(4</usr/share/crypto-policies/DEFAULT/gnutls.txt>, "[overrides]\\ninsecure-hash = STRE"..., 4096) = 1111
49794      0.000051 read(4</usr/share/crypto-policies/DEFAULT/gnutls.txt>, "", 4096) = 0
49794      0.000409 read(4</usr/share/locale/locale.alias>, "# Locale name alias data base.\\n#"..., 4096) = 2998
49794      0.000030 read(4</usr/share/locale/locale.alias>, "", 4096) = 0
49794      0.000120 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49794      0.000049 write(5<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49794      0.000045 clone(child_stack=0x7f0a78787bb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[49796], tls=0x7f0a78788700, child_tidptr=0x7f0a787889d0) = 49796
49796      0.000118 read(5<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49794      0.000049 write(5<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49796      0.000028 read(5<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49794      0.000873 clone(child_stack=0x7f0a77f86bb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[49797], tls=0x7f0a77f87700, child_tidptr=0x7f0a77f879d0) = 49797
49794      0.000045 read(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49797      0.000977 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49797      0.000053 clone(child_stack=0x7f0a77785bb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[49798], tls=0x7f0a77786700, child_tidptr=0x7f0a777869d0) = 49798
49798      0.000106 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49797      0.000022 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000062 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49797      0.000024 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49797      0.000036 read(8<anon_inode:[eventfd]>,  <unfinished ...>
49798      0.000011 read(7<anon_inode:[eventfd]>,  <unfinished ...>
49797      0.000005 <... read resumed>"\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000004 <... read resumed>"\\2\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000075 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000072 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000023 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000029 read(7<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000043 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49797      0.000045 read(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49797      0.000038 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49797      0.000057 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000031 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8 <unfinished ...>
49794      0.000010 read(4<anon_inode:[eventfd]>,  <unfinished ...>
49798      0.000008 <... write resumed>) = 8
49794      0.000003 <... read resumed>"\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000014 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49794      0.000052 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000028 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000152 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000052 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000017 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000031 read(7<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000109 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49794      0.000022 read(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000014 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000028 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49794      0.000030 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000023 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000228 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000063 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000020 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000051 read(7<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000592 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000034 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000640 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000089 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000023 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000037 read(7<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.001207 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49794      0.000428 read(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000025 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000033 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49794      0.000283 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000027 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49794      0.000140 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000029 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000370 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000079 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000027 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000039 read(7<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000244 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000287 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000237 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49794      0.000046 read(4<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000130 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000034 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000030 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49794      0.001209 read(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49794      0.000323 write(1<pipe:[296283]>, "Robert77_5G\\n", 12) = 12
49795      0.000027 <... read resumed>"Robert77_5G\\n", 4096) = 12
49794      0.000006 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8 <unfinished ...>
49795      0.000010 read(0<pipe:[296283]>,  <unfinished ...>
49794      0.000007 <... write resumed>) = 8
49794      0.000064 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000020 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49794      0.000019 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000132 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000058 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000071 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000027 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49798      0.000084 read(7<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
49798      0.000165 +++ exited with 0 +++
49797      0.000003 +++ exited with 0 +++
49796      0.000001 +++ exited with 0 +++
49795      0.000354 <... read resumed>"", 4096) = 0
49794      0.000021 +++ exited with 0 +++
49795      0.000015 write(1<pipe:[295183]>, "Robert77_5G\\n", 12) = 12
49777      0.000033 <... read resumed>"Robert77_5G\\n", 128) = 12
49777      0.000020 read(4<pipe:[295183]>,  <unfinished ...>
49795      0.000138 +++ exited with 0 +++
49793      0.000070 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49794, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000162 <... read resumed>"", 128) = 0
49793      0.000006 +++ exited with 0 +++
49777      0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49793, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000262 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49801
49777      0.000107 read(4<pipe:[297228]>,  <unfinished ...>
49801      0.000544 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49802
49801      0.000107 read(4<pipe:[295187]>,  <unfinished ...>
49802      0.000202 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49803
49802      0.000177 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49804
49803      0.000441 execve("/usr/sbin/iwconfig", ["iwconfig", "wlp0s20f3"], 0x561563a04eb0 /* 93 vars */ <unfinished ...>
49804      0.000066 execve("/usr/bin/sed", ["sed", "-n", "s/.*Link Quality=\\\\([0-9]*\\\\)\\\\/\\\\(["...], 0x561563a04eb0 /* 93 vars */ <unfinished ...>
49803      0.000072 <... execve resumed>) = 0
49804      0.000049 <... execve resumed>) = 0
49803      0.000086 read(4</usr/lib64/libiw.so.29>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p'\\0\\0\\0\\0\\0\\0"..., 832) = 832
49804      0.000035 read(4</usr/lib64/libacl.so.1.1.2253>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20'\\0\\0\\0\\0\\0\\0"..., 832) = 832
49804      0.000104 read(4</usr/lib64/libselinux.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\207\\0\\0\\0\\0\\0\\0"..., 832) = 832
49803      0.000017 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49804      0.000084 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49803      0.000103 read(4</usr/lib64/libm-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\363\\0\\0\\0\\0\\0\\0"..., 832) = 832
49804      0.000049 read(4</usr/lib64/libattr.so.1.1.2448>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
49804      0.000100 read(4</usr/lib64/libpcre2-8.so.0.10.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\2604\\0\\0\\0\\0\\0\\0"..., 832) = 832
49804      0.000098 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
49804      0.000146 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
49804      0.001050 read(0<pipe:[291736]>,  <unfinished ...>
49803      0.001549 write(1<pipe:[291736]>, "wlp0s20f3  IEEE 802.11  ESSID:\\"R"..., 457) = 457
49804      0.000026 <... read resumed>"wlp0s20f3  IEEE 802.11  ESSID:\\"R"..., 4096) = 457
49803      0.000091 +++ exited with 0 +++
49804      0.000047 read(0<pipe:[291736]>, "", 4096) = 0
49804      0.000021 write(1<pipe:[295187]>, "52*100/70\\n", 10) = 10
49801      0.000020 <... read resumed>"52*100/70\\n", 128) = 10
49801      0.000013 read(4<pipe:[295187]>,  <unfinished ...>
49804      0.000116 +++ exited with 0 +++
49802      0.000065 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49803, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49802      0.000132 +++ exited with 0 +++
49801      0.000005 <... read resumed>"", 128) = 0
49801      0.000011 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49802, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49801      0.000145 write(1<pipe:[297228]>, "wifi: ", 6) = 6
49777      0.000024 <... read resumed>"wifi: ", 128) = 6
49777      0.000014 read(4<pipe:[297228]>,  <unfinished ...>
49801      0.000070 write(1<pipe:[297228]>, "\\33[0;32m74%\\33[0m", 14) = 14
49777      0.000021 <... read resumed>"\\33[0;32m74%\\33[0m", 128) = 14
49777      0.000009 read(4<pipe:[297228]>, "", 128) = 0
49801      0.000087 +++ exited with 0 +++
49777      0.000006 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49801, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000317 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49805
49777      0.000111 read(4<pipe:[296284]>,  <unfinished ...>
49805      0.000244 write(1<pipe:[296284]>, "fans:", 5) = 5
49777      0.000024 <... read resumed>"fans:", 128) = 5
49777      0.000012 read(4<pipe:[296284]>,  <unfinished ...>
49805      0.000559 write(1<pipe:[296284]>, " ", 1 <unfinished ...>
49777      0.000012 <... read resumed>" ", 128) = 1
49805      0.000004 <... write resumed>) = 1
49777      0.000003 read(4<pipe:[296284]>,  <unfinished ...>
49805      0.000121 read(0</sys/devices/platform/thinkpad_hwmon/hwmon/hwmon4/fan1_input>, "2868\\n", 128) = 5
49805      0.000633 write(1<pipe:[296284]>, "\\33[0;33m2868\\33[0m", 15 <unfinished ...>
49777      0.000014 <... read resumed>"\\33[0;33m2868\\33[0m", 128) = 15
49805      0.000004 <... write resumed>) = 15
49777      0.000003 read(4<pipe:[296284]>,  <unfinished ...>
49805      0.000009 write(1<pipe:[296284]>, "\\n", 1 <unfinished ...>
49777      0.000012 <... read resumed>"\\n", 128) = 1
49805      0.000004 <... write resumed>) = 1
49777      0.000003 read(4<pipe:[296284]>, "", 128) = 0
49805      0.000094 +++ exited with 0 +++
49777      0.000002 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49805, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000220 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49806
49777      0.000085 read(4<pipe:[296285]>,  <unfinished ...>
49806      0.000295 read(0</sys/devices/pci0000:00/0000:00:02.0/drm/card0/card0-eDP-1/intel_backlight/brightness>, "14546\\n", 128) = 6
49806      0.000147 read(0</sys/devices/pci0000:00/0000:00:02.0/drm/card0/card0-eDP-1/intel_backlight/max_brightness>, "24242\\n", 128) = 6
49806      0.000065 write(1<pipe:[296285]>, "backlight: ", 11 <unfinished ...>
49777      0.000014 <... read resumed>"backlight: ", 128) = 11
49806      0.000004 <... write resumed>) = 11
49777      0.000003 read(4<pipe:[296285]>,  <unfinished ...>
49806      0.000018 write(1<pipe:[296285]>, "60%\\n", 4 <unfinished ...>
49777      0.000011 <... read resumed>"60%\\n", 128) = 4
49806      0.000004 <... write resumed>) = 4
49777      0.000003 read(4<pipe:[296285]>, "", 128) = 0
49806      0.000086 +++ exited with 0 +++
49777      0.000002 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49806, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000213 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49807
49777      0.000094 read(4<pipe:[296286]>,  <unfinished ...>
49807      0.000217 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49808
49807      0.000131 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49809
49807      0.000150 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49810
49810      0.000293 read(0<pipe:[293847]>,  <unfinished ...>
49808      0.000068 execve("/usr/bin/amixer", ["amixer", "get", "Master"], 0x5615639e02e0 /* 93 vars */ <unfinished ...>
49809      0.000118 execve("/usr/bin/sed", ["sed", "-n", "\\n      /\\\\[/{\\n        # delete ev"...], 0x5615639e02e0 /* 93 vars */ <unfinished ...>
49808      0.000042 <... execve resumed>) = 0
49809      0.000108 <... execve resumed>) = 0
49808      0.000027 read(4</usr/lib64/libm-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\363\\0\\0\\0\\0\\0\\0"..., 832) = 832
49809      0.000101 read(4</usr/lib64/libacl.so.1.1.2253>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20'\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000040 read(4</usr/lib64/libasound.so.2.0.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p*\\3\\0\\0\\0\\0\\0"..., 832) = 832
49809      0.000065 read(4</usr/lib64/libselinux.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\207\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000062 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49809      0.000039 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000136 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
49809      0.000012 read(4</usr/lib64/libattr.so.1.1.2448>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
49809      0.000100 read(4</usr/lib64/libpcre2-8.so.0.10.0>,  <unfinished ...>
49808      0.000005 read(4</usr/lib64/libpthread-2.31.so>,  <unfinished ...>
49809      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\2604\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
49809      0.000079 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000039 read(4</usr/lib64/librt-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\0207\\0\\0\\0\\0\\0\\0"..., 832) = 832
49809      0.000064 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000609 read(4</usr/share/alsa/alsa.conf>, "#\\n#  ALSA library configuration "..., 4096) = 4096
49809      0.000125 read(0<pipe:[293846]>,  <unfinished ...>
49808      0.000008 read(4</usr/share/alsa/alsa.conf>, "efaults.pcm.device\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\t"..., 4096) = 4096
49808      0.000109 read(4</usr/share/alsa/alsa.conf>, "p.device\\n\\t\\t}\\n\\t}\\n\\thint.descriptio"..., 4096) = 1657
49808      0.000053 read(4</usr/share/alsa/alsa.conf>, "", 4096) = 0
49808      0.000210 read(4</usr/share/alsa/alsa.conf.d/50-pulseaudio.conf>, "# Add a specific named PulseAudi"..., 4096) = 402
49808      0.000030 read(4</usr/share/alsa/alsa.conf.d/50-pulseaudio.conf>, "", 4096) = 0
49808      0.000048 read(4</etc/alsa/conf.d/99-pulseaudio-default.conf>, "# Default to PulseAudio\\n\\npcm.!de"..., 4096) = 201
49808      0.000020 read(4</etc/alsa/conf.d/99-pulseaudio-default.conf>, "", 4096) = 0
49808      0.000065 read(4</etc/asound.conf>, "#\\n# Place your global alsa-lib c"..., 4096) = 55
49808      0.000016 read(4</etc/asound.conf>, "", 4096) = 0
49808      0.000088 read(4</usr/lib64/alsa-lib/libasound_module_ctl_pulse.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20(\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000152 read(4</usr/lib64/libpulse.so.0.21.2>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000\\357\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000226 read(4</usr/lib64/pulseaudio/libpulsecommon-13.99.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\235\\1\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000118 read(4</usr/lib64/libX11-xcb.so.1.0.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0P\\20\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000118 read(4</usr/lib64/libX11.so.6.3.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\23\\2\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000115 read(4</usr/lib64/libxcb.so.1.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\220\\315\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000108 read(4</usr/lib64/libICE.so.6.3.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0Pa\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000116 read(4</usr/lib64/libSM.so.6.0.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260$\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000107 read(4</usr/lib64/libXtst.so.6.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260#\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000114 read(4</usr/lib64/libsystemd.so.0.28.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320B\\1\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000123 read(4</usr/lib64/libsndfile.so.1.0.28>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000115 read(4</usr/lib64/libasyncns.so.0.3.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p$\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000110 read(4</usr/lib64/libdbus-1.so.3.19.13>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\360\\n\\1\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000135 read(4</usr/lib64/libcap.so.2.26>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\360#\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000120 read(4</usr/lib64/libXau.so.6.0.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\23\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000116 read(4</usr/lib64/libuuid.so.1.3.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20&\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000114 read(4</usr/lib64/libXext.so.6.4.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0pG\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000104 read(4</usr/lib64/libXi.so.6.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260$\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000103 read(4</usr/lib64/liblzma.so.5.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3609\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000128 read(4</usr/lib64/liblz4.so.1.9.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000114 read(4</usr/lib64/libgcrypt.so.20.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\300\\305\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000115 read(4</usr/lib64/libgcc_s-10-20200723.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3605\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000114 read(4</usr/lib64/libgsm.so.1.0.18>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p#\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000114 read(4</usr/lib64/libFLAC.so.8.3.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260\\241\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000107 read(4</usr/lib64/libogg.so.0.8.4>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\220$\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000129 read(4</usr/lib64/libvorbis.so.0.4.8>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320K\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000118 read(4</usr/lib64/libvorbisenc.so.2.0.11>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000A\\1\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000108 read(4</usr/lib64/libresolv-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000G\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.000135 read(4</usr/lib64/libgpg-error.so.0.27.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320L\\0\\0\\0\\0\\0\\0"..., 832) = 832
49808      0.002060 read(8</etc/pulse/client.conf>, "# This file is part of PulseAudi"..., 4096) = 1201
49808      0.000028 read(8</etc/pulse/client.conf>, "", 4096) = 0
49808      0.000131 read(8</dev/urandom>, "\\355\\266 @", 4) = 4
49808      0.000132 clone(child_stack=0x7efe7b4b3fb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[49811], tls=0x7efe7b4b4700, child_tidptr=0x7efe7b4b49d0) = 49811
49808      0.000294 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000033 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000032 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000089 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000085 read(10</home/quentin/.config/pulse/cookie>, "a\\372\\302\\315\\237_\\274h\\246L0\\3122:\\262\\247\\260\\t\\225\\344_|\\364\\346\\333g\\v\\273\\342\\4v\\327"..., 256) = 256
49811      0.000106 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000023 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000017 read(6<pipe:[291741]>, "WWWW", 10) = 4
49811      0.000018 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49811      0.000090 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000042 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000017 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000027 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 read(6<pipe:[291741]>, "W", 10) = 1
49811      0.000119 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000060 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000022 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000030 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000068 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000108 read(10</etc/machine-id>, "3482c01c583640d4a544cbf9485272bb"..., 4096) = 33
49811      0.000035 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000033 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000036 read(6<pipe:[291741]>, "WWWWW", 10) = 5
49811      0.000021 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49811      0.000029 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000040 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000035 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000029 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000048 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000025 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000026 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000023 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000029 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000027 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000045 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000026 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000027 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000017 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000026 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000026 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000017 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000026 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000026 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000017 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000026 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000026 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000060 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000016 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000030 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000024 read(6<pipe:[291741]>, "WWWWW", 10) = 5
49811      0.000020 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49811      0.000028 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000026 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000017 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000026 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000027 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000029 read(6<pipe:[291741]>, "WW", 10) = 2
49808      0.000066 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000021 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000039 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000024 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000045 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000034 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000039 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000033 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000023 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000041 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000030 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000058 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000071 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000039 write(5<pipe:[291740]>, "x", 1) = 1
49811      0.000043 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000042 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000021 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000021 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000044 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000032 write(5<pipe:[291740]>, "x", 1) = 1
49811      0.000032 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000054 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000066 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000054 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000041 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000021 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000049 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000047 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000049 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000052 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000046 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000041 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000045 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000045 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000050 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000046 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000045 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000040 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000023 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000029 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000044 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000045 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000050 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000018 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000027 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000028 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000052 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000046 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000041 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000021 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000043 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000043 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000047 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000018 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000050 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000049 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000040 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000018 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000043 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000043 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000047 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000046 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000046 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000040 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000023 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000031 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000021 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000044 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000043 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000047 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000053 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000045 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000040 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000021 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000044 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000044 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000049 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000018 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000052 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000045 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000040 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000043 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000042 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000060 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000022 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000058 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000050 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000043 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000021 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000029 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000043 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000043 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000048 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000021 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000055 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000045 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000041 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000021 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000029 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000043 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000042 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000050 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000060 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000045 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000041 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000021 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000029 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000043 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000043 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000051 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000029 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000057 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000045 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000041 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000021 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000029 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000043 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000043 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000050 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000056 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000045 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000040 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000030 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000022 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000044 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000043 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000049 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000021 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000054 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000045 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000040 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000021 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000043 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000042 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000048 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000020 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000029 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000055 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000044 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000041 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000021 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000029 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000044 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000042 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000072 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000021 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000029 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000057 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000044 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000041 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000021 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000029 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000020 read(6<pipe:[291741]>, "WW", 10) = 2
49811      0.000043 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
49811      0.000042 read(6<pipe:[291741]>, 0x7efe7b4b3c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
49808      0.000042 write(7<pipe:[291741]>, "W", 1) = 1
49811      0.000063 +++ exited with 0 +++
49808      0.000018 write(5<pipe:[291740]>, "x", 1) = 1
49808      0.000021 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000122 write(7<pipe:[291741]>, "W", 1) = 1
49808      0.000177 write(1<pipe:[293846]>, "Simple mixer control 'Master',0\\n"..., 243) = 243
49809      0.000023 <... read resumed>"Simple mixer control 'Master',0\\n"..., 4096) = 243
49809      0.000083 write(1<pipe:[293847]>, "90 true\\n", 8) = 8
49810      0.000023 <... read resumed>"9", 1) = 1
49810      0.000013 read(0<pipe:[293847]>, "0", 1) = 1
49810      0.000033 read(0<pipe:[293847]>, " ", 1) = 1
49810      0.000023 read(0<pipe:[293847]>, "t", 1) = 1
49810      0.000022 read(0<pipe:[293847]>, "r", 1) = 1
49810      0.000020 read(0<pipe:[293847]>, "u", 1) = 1
49810      0.000023 read(0<pipe:[293847]>,  <unfinished ...>
49808      0.000012 +++ exited with 0 +++
49810      0.000004 <... read resumed>"e", 1) = 1
49810      0.000010 read(0<pipe:[293847]>, "\\n", 1) = 1
49809      0.000056 +++ exited with 0 +++
49810      0.000032 write(1<pipe:[296286]>, "vol: ", 5) = 5
49777      0.000021 <... read resumed>"vol: ", 128) = 5
49777      0.000016 read(4<pipe:[296286]>,  <unfinished ...>
49810      0.000007 write(1<pipe:[296286]>, "90%", 3 <unfinished ...>
49777      0.000011 <... read resumed>"90%", 128) = 3
49810      0.000004 <... write resumed>) = 3
49777      0.000003 read(4<pipe:[296286]>,  <unfinished ...>
49810      0.000098 +++ exited with 0 +++
49807      0.000068 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49808, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000136 <... read resumed>"", 128) = 0
49807      0.000002 +++ exited with 0 +++
49777      0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49807, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000226 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49812
49777      0.000099 read(4<pipe:[296287]>,  <unfinished ...>
49812      0.000322 read(0</sys/devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/device:19/PNP0C09:00/PNP0C0A:00/power_supply/BAT0/status>, "Discharging\\n", 128) = 12
49812      0.003341 read(0</sys/devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/device:19/PNP0C09:00/PNP0C0A:00/power_supply/BAT0/capacity>, "46\\n", 128) = 3
49812      0.000070 write(1<pipe:[296287]>, "bat: ", 5) = 5
49777      0.000019 <... read resumed>"bat: ", 128) = 5
49777      0.000010 read(4<pipe:[296287]>,  <unfinished ...>
49812      0.000084 write(1<pipe:[296287]>, "\\33[0;37m46%\\33[0m", 14 <unfinished ...>
49777      0.000012 <... read resumed>"\\33[0;37m46%\\33[0m", 128) = 14
49812      0.000004 <... write resumed>) = 14
49777      0.000003 read(4<pipe:[296287]>, "", 128) = 0
49812      0.000089 +++ exited with 0 +++
49777      0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49812, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000214 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49813
49777      0.000093 read(4<pipe:[296288]>,  <unfinished ...>
49813      0.000208 write(1<pipe:[296288]>, "home: ", 6 <unfinished ...>
49777      0.000017 <... read resumed>"home: ", 128) = 6
49813      0.000004 <... write resumed>) = 6
49777      0.000003 read(4<pipe:[296288]>,  <unfinished ...>
49813      0.000039 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49814
49813      0.000118 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49815
49815      0.000252 read(0<pipe:[292797]>,  <unfinished ...>
49814      0.000175 execve("/usr/bin/df", ["df", "/home", "-h", "--output=used,size,pcent"], 0x5615639e02e0 /* 93 vars */) = 0
49814      0.000278 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49814      0.000481 read(4</usr/share/locale/locale.alias>, "# Locale name alias data base.\\n#"..., 4096) = 2998
49814      0.000033 read(4</usr/share/locale/locale.alias>, "", 4096) = 0
49814      0.000150 read(4</proc/49814/mountinfo>, "23 65 0:22 / /sys rw,nosuid,node"..., 1024) = 1024
49814      0.000060 read(4</proc/49814/mountinfo>, "e rw,mode=700\\n60 23 0:31 / /sys/"..., 1024) = 1024
49814      0.000066 read(4</proc/49814/mountinfo>, "binfmt_misc rw,nosuid,nodev,noex"..., 1024) = 762
49814      0.000038 read(4</proc/49814/mountinfo>, "", 1024) = 0
49814      0.000155 write(1<pipe:[292797]>, " Used  Size Use%\\n  37G  157G  25"..., 34) = 34
49815      0.000022 <... read resumed>" ", 1) = 1
49815      0.000007 read(0<pipe:[292797]>, "U", 1) = 1
49815      0.000019 read(0<pipe:[292797]>, "s", 1) = 1
49815      0.000018 read(0<pipe:[292797]>, "e", 1) = 1
49815      0.000017 read(0<pipe:[292797]>, "d", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, " ", 1) = 1
49815      0.000016 read(0<pipe:[292797]>,  <unfinished ...>
49814      0.000008 +++ exited with 0 +++
49815      0.000003 <... read resumed>" ", 1) = 1
49815      0.000006 read(0<pipe:[292797]>, "S", 1) = 1
49815      0.000015 read(0<pipe:[292797]>, "i", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "z", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "e", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, " ", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "U", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "s", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "e", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "%", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "\\n", 1) = 1
49815      0.000061 read(0<pipe:[292797]>, " ", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, " ", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "3", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "7", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "G", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, " ", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, " ", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "1", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "5", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "7", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "G", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, " ", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, " ", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "2", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "5", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "%", 1) = 1
49815      0.000016 read(0<pipe:[292797]>, "\\n", 1) = 1
49815      0.000141 write(1<pipe:[296288]>, "\\33[0;37m37G/157G\\33[0m", 19 <unfinished ...>
49777      0.000021 <... read resumed>"\\33[0;37m37G/157G\\33[0m", 128) = 19
49815      0.000011 <... write resumed>) = 19
49777      0.000004 read(4<pipe:[296288]>,  <unfinished ...>
49815      0.000092 +++ exited with 0 +++
49813      0.000061 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49814, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000132 <... read resumed>"", 128) = 0
49813      0.000006 +++ exited with 0 +++
49777      0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49813, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000218 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49816
49777      0.000103 read(4<pipe:[296297]>,  <unfinished ...>
49816      0.000476 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f61a3e16a10) = 49817
49817      0.000151 execve("/usr/bin/date", ["date", "+%H:%M:%S %d/%m/%Y"], 0x5615639e02e0 /* 93 vars */) = 0
49817      0.000247 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
49817      0.000488 read(4</usr/share/zoneinfo/Europe/Paris>, "TZif2\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\r\\0\\0\\0\\r\\0\\0\\0\\0"..., 4096) = 2962
49817      0.000031 read(4</usr/share/zoneinfo/Europe/Paris>, "TZif2\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\r\\0\\0\\0\\r\\0\\0\\0\\0"..., 4096) = 1863
49817      0.000045 write(1<pipe:[296297]>, "00:24:11 01/10/2020\\n", 20 <unfinished ...>
49777      0.000016 <... read resumed>"00:24:11 01/10/2020\\n", 128) = 20
49817      0.000005 <... write resumed>) = 20
49777      0.000007 read(4<pipe:[296297]>,  <unfinished ...>
49817      0.000073 +++ exited with 0 +++
49816      0.000035 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49817, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000115 <... read resumed>"", 128) = 0
49816      0.000003 +++ exited with 0 +++
49777      0.000005 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=49816, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
49777      0.000167 write(1</dev/pts/3>, "MainThread: \\33[0;32m1%\\33[0m\\n", 26) = 26
49777      0.000027 write(1</dev/pts/3>, "Robert77_5G\\n", 12) = 12
49777      0.000020 write(1</dev/pts/3>, "wifi: \\33[0;32m74%\\33[0m\\n", 21) = 21
49777      0.000020 write(1</dev/pts/3>, "fans: \\33[0;33m2868\\33[0m\\n", 22) = 22
49777      0.000020 write(1</dev/pts/3>, "backlight: 60%\\n", 15) = 15
49777      0.000020 write(1</dev/pts/3>, "vol: 90%\\n", 9) = 9
49777      0.000020 write(1</dev/pts/3>, "bat: \\33[0;37m46%\\33[0m\\n", 20) = 20
49777      0.000033 write(1</dev/pts/3>, "home: \\33[0;37m37G/157G\\33[0m\\n", 26) = 26
49777      0.000029 write(1</dev/pts/3>, "00:24:11 01/10/2020\\n", 20) = 20
49777      0.000040 read(255</home/quentin/projects/system-summary/system-summary>, "# keep above line blank\\n", 7024) = 24
49777      0.000024 read(255</home/quentin/projects/system-summary/system-summary>, "", 7024) = 0
49777      0.000139 +++ exited with 0 +++`;
