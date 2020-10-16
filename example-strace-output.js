const exampleStraceOutput = `23063      0.000000 execve("/home/quentin/.local/bin/system-summary", ["system-summary"], 0x7ffdc97bce00 /* 93 vars */) = 0
23063      0.000448 read(4</usr/lib64/libtinfo.so.6.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0P\\364\\0\\0\\0\\0\\0\\0"..., 832) = 832
23063      0.000195 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
23063      0.000144 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23063      0.001967 read(4</home/quentin/projects/system-summary/system-summary>, "#!/bin/sh\\n\\n# TODO\\n# cpu/load\\n# s"..., 80) = 80
23063      0.000155 read(255</home/quentin/projects/system-summary/system-summary>, "#!/bin/sh\\n\\n# TODO\\n# cpu/load\\n# s"..., 7024) = 7024
23063      0.001086 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23064
23063      0.000124 read(4<pipe:[141831]>,  <unfinished ...>
23064      0.000398 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23065
23064      0.000139 read(4<pipe:[146684]>,  <unfinished ...>
23065      0.000369 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23066
23065      0.000177 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23067
23066      0.000503 execve("/usr/bin/bluetoothctl", ["bluetoothctl", "--", "info"], 0x55ab89de02e0 /* 93 vars */ <unfinished ...>
23067      0.000121 execve("/usr/bin/sed", ["sed", "-n", "\\n        /^[[:blank:]]*Name: /{\\n"...], 0x55ab89de02e0 /* 93 vars */ <unfinished ...>
23066      0.000032 <... execve resumed>) = 0
23067      0.000115 <... execve resumed>) = 0
23066      0.000039 read(4</usr/lib64/libglib-2.0.so.0.6400.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000\\333\\1\\0\\0\\0\\0\\0"..., 832) = 832
23067      0.000121 read(4</usr/lib64/libacl.so.1.1.2253>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20'\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000078 read(4</usr/lib64/libdbus-1.so.3.19.13>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\360\\n\\1\\0\\0\\0\\0\\0"..., 832) = 832
23067      0.000057 read(4</usr/lib64/libselinux.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\207\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000083 read(4</usr/lib64/libreadline.so.8.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\220\\222\\1\\0\\0\\0\\0\\0"..., 832) = 832
23067      0.000043 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000106 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23067      0.000071 read(4</usr/lib64/libattr.so.1.1.2448>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
23067      0.000119 read(4</usr/lib64/libpcre2-8.so.0.10.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\2604\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000016 read(4</usr/lib64/libpcre.so.1.2.12>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260#\\0\\0\\0\\0\\0\\0"..., 832) = 832
23067      0.000100 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000036 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
23067      0.000080 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000074 read(4</usr/lib64/libsystemd.so.0.28.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320B\\1\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000150 read(4</usr/lib64/libtinfo.so.6.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0P\\364\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000116 read(4</usr/lib64/librt-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\0207\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000135 read(4</usr/lib64/liblzma.so.5.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3609\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000134 read(4</usr/lib64/liblz4.so.1.9.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000137 read(4</usr/lib64/libgcrypt.so.20.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\300\\305\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000115 read(4</usr/lib64/libgcc_s-10-20200723.so.1>,  <unfinished ...>
23067      0.000007 read(0<pipe:[142950]>,  <unfinished ...>
23066      0.000008 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3605\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000117 read(4</usr/lib64/libgpg-error.so.0.27.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320L\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.000124 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
23066      0.001338 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23066      0.000305 read(5<socket:[146114]>, "OK b16a2241c3d91b15805e523541b98"..., 2048) = 37
23066      0.000077 read(5<socket:[146114]>, "AGREE_UNIX_FD\\r\\n", 2048) = 15
23066      0.000267 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23066      0.000389 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23066      0.000053 read(4<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23066      0.000021 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23066      0.000052 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23066      0.000030 read(4<anon_inode:[eventfd]>, "\\2\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23066      0.000386 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23066      0.000109 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23066      0.000055 read(4<anon_inode:[eventfd]>, "\\2\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23066      0.001014 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23066      0.000039 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23066      0.000033 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23066      0.000033 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23066      0.000976 write(1<pipe:[142950]>, "Missing device address argument\\n", 32) = 32
23067      0.000037 <... read resumed>"Missing device address argument\\n", 4096) = 32
23067      0.000027 read(0<pipe:[142950]>, "", 4096) = 0
23066      0.000141 +++ exited with 1 +++
23067      0.000017 write(1<pipe:[146684]>, "\\n", 1) = 1
23064      0.000034 <... read resumed>"\\n", 128) = 1
23064      0.000023 read(4<pipe:[146684]>,  <unfinished ...>
23067      0.000148 +++ exited with 0 +++
23065      0.000071 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23066, si_uid=1000, si_status=1, si_utime=0, si_stime=0} ---
23065      0.000139 +++ exited with 0 +++
23064      0.000002 <... read resumed>"", 128) = 0
23064      0.000008 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23065, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000257 <... read resumed>"", 128) = 0
23064      0.000005 +++ exited with 0 +++
23063      0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23064, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000263 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23068
23063      0.000118 read(4<pipe:[141832]>,  <unfinished ...>
23068      0.000251 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23069
23068      0.000154 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23070
23069      0.000497 execve("/home/quentin/projects/useless-scripts/new-usb", ["new-usb"], 0x55ab89de02e0 /* 93 vars */ <unfinished ...>
23070      0.000045 execve("/usr/bin/sed", ["sed", "-n", "\\n      /.*ID [[:alnum:]]*:[[:aln"...], 0x55ab89de02e0 /* 93 vars */ <unfinished ...>
23069      0.000107 <... execve resumed>) = 0
23070      0.000052 <... execve resumed>) = 0
23069      0.000121 read(4</usr/lib64/libtinfo.so.6.1>,  <unfinished ...>
23070      0.000013 read(4</usr/lib64/libacl.so.1.1.2253>,  <unfinished ...>
23069      0.000008 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0P\\364\\0\\0\\0\\0\\0\\0"..., 832) = 832
23070      0.000006 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20'\\0\\0\\0\\0\\0\\0"..., 832) = 832
23070      0.000096 read(4</usr/lib64/libselinux.so.1>,  <unfinished ...>
23069      0.000007 read(4</usr/lib64/libdl-2.31.so>,  <unfinished ...>
23070      0.000006 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\207\\0\\0\\0\\0\\0\\0"..., 832) = 832
23069      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
23070      0.000105 read(4</usr/lib64/libc-2.31.so>,  <unfinished ...>
23069      0.000008 read(4</usr/lib64/libc-2.31.so>,  <unfinished ...>
23070      0.000006 <... read resumed>"\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23069      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23070      0.000133 read(4</usr/lib64/libattr.so.1.1.2448>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
23070      0.000101 read(4</usr/lib64/libpcre2-8.so.0.10.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\2604\\0\\0\\0\\0\\0\\0"..., 832) = 832
23070      0.000098 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
23070      0.000104 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
23070      0.000757 read(0<pipe:[146694]>,  <unfinished ...>
23069      0.000332 read(4</home/quentin/projects/useless-scripts/new-usb>, "#!/bin/sh\\n\\n# grep generated from"..., 80) = 80
23069      0.000102 read(255</home/quentin/projects/useless-scripts/new-usb>, "#!/bin/sh\\n\\n# grep generated from"..., 208) = 208
23069      0.000036 read(255</home/quentin/projects/useless-scripts/new-usb>, "", 208) = 0
23069      0.000050 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f35d21f1a10) = 23071
23069      0.000111 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f35d21f1a10) = 23072
23071      0.000455 execve("/usr/bin/lsusb", ["lsusb"], 0x562b4d522700 /* 93 vars */ <unfinished ...>
23072      0.000066 execve("/usr/bin/grep", ["grep", "-v", "-e", "04f3:289b", "-e", "06cb:00bd", "-e", "1d6b:0002", "-e", "1d6b:0003", "-e", "5986:2113", "-e", "8087:0026"], 0x562b4d522700 /* 93 vars */ <unfinished ...>
23071      0.000060 <... execve resumed>) = 0
23072      0.000064 <... execve resumed>) = 0
23071      0.000061 read(4</usr/lib64/libusb-1.0.so.0.2.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0pO\\0\\0\\0\\0\\0\\0"..., 832) = 832
23072      0.000059 read(4</usr/lib64/libpcre.so.1.2.12>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260#\\0\\0\\0\\0\\0\\0"..., 832) = 832
23071      0.000076 read(4</usr/lib64/libudev.so.1.6.17>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260N\\0\\0\\0\\0\\0\\0"..., 832) = 832
23072      0.000056 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23071      0.000054 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23072      0.000100 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
23071      0.000077 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
23071      0.000136 read(4</usr/lib64/libgcc_s-10-20200723.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3605\\0\\0\\0\\0\\0\\0"..., 832) = 832
23072      0.000358 read(4</usr/share/locale/locale.alias>, "# Locale name alias data base.\\n#"..., 4096) = 2998
23072      0.000027 read(4</usr/share/locale/locale.alias>, "", 4096) = 0
23072      0.000147 read(0<pipe:[140973]>,  <unfinished ...>
23071      0.000439 clone(child_stack=0x7f4c5b346fb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[23073], tls=0x7f4c5b347700, child_tidptr=0x7f4c5b3479d0) = 23073
23071      0.000649 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/1-9:1.0/uevent>, "DEVTYPE=usb_interface\\nPRODUCT=6c"..., 4096) = 132
23071      0.000027 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/1-9:1.0/uevent>, "", 4096) = 0
23071      0.000066 read(10</run/udev/data/+usb:1-9:1.0>, "I:11881373\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 288
23071      0.000018 read(10</run/udev/data/+usb:1-9:1.0>, "", 4096) = 0
23071      0.000459 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/uevent>, "MAJOR=189\\nMINOR=3\\nDEVNAME=bus/us"..., 4096) = 127
23071      0.000023 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/uevent>, "", 4096) = 0
23071      0.000066 read(10</run/udev/data/c189:3>, "I:11864116\\nE:ID_VENDOR=06cb\\nE:ID"..., 4096) = 469
23071      0.000017 read(10</run/udev/data/c189:3>, "", 4096) = 0
23071      0.000517 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/uevent>, "MAJOR=189\\nMINOR=256\\nDEVNAME=bus/"..., 4096) = 126
23071      0.000021 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/uevent>, "", 4096) = 0
23071      0.000071 read(10</run/udev/data/c189:256>, "I:11811466\\nE:ID_VENDOR=Linux_5.8"..., 4096) = 588
23071      0.000019 read(10</run/udev/data/c189:256>, "", 4096) = 0
23071      0.000489 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/1-10:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=btu"..., 4096) = 143
23071      0.000021 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/1-10:1.0/uevent>, "", 4096) = 0
23071      0.000062 read(10</run/udev/data/+usb:1-10:1.0>, "I:11741353\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 261
23071      0.000017 read(10</run/udev/data/+usb:1-10:1.0>, "", 4096) = 0
23071      0.000427 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/uevent>, "MAJOR=189\\nMINOR=0\\nDEVNAME=bus/us"..., 4096) = 124
23071      0.000022 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/uevent>, "", 4096) = 0
23071      0.000068 read(10</run/udev/data/c189:0>, "I:11700758\\nE:ID_VENDOR=Linux_5.8"..., 4096) = 588
23071      0.000018 read(10</run/udev/data/c189:0>, "", 4096) = 0
23071      0.000522 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/1-8:1.1/uevent>, "DEVTYPE=usb_interface\\nDRIVER=uvc"..., 4096) = 150
23071      0.000021 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/1-8:1.1/uevent>, "", 4096) = 0
23071      0.000065 read(10</run/udev/data/+usb:1-8:1.1>, "I:11758276\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 286
23071      0.000017 read(10</run/udev/data/+usb:1-8:1.1>, "", 4096) = 0
23071      0.000483 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/1-6:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=usb"..., 4096) = 144
23071      0.000023 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/1-6:1.0/uevent>, "", 4096) = 0
23071      0.000063 read(10</run/udev/data/+usb:1-6:1.0>, "I:11753524\\nE:ID_VENDOR_FROM_DATA"..., 4096) = 147
23071      0.000017 read(10</run/udev/data/+usb:1-6:1.0>, "", 4096) = 0
23071      0.000522 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/3-0:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=hub"..., 4096) = 138
23071      0.000020 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/3-0:1.0/uevent>, "", 4096) = 0
23071      0.000066 read(10</run/udev/data/+usb:3-0:1.0>, "I:11822795\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 249
23071      0.000019 read(10</run/udev/data/+usb:3-0:1.0>, "", 4096) = 0
23071      0.000503 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/uevent>, "MAJOR=189\\nMINOR=4\\nDEVNAME=bus/us"..., 4096) = 125
23071      0.000025 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/uevent>, "", 4096) = 0
23071      0.000072 read(10</run/udev/data/c189:4>, "I:11722173\\nE:ID_VENDOR=8087\\nE:ID"..., 4096) = 321
23071      0.000018 read(10</run/udev/data/c189:4>, "", 4096) = 0
23071      0.000543 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/4-0:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=hub"..., 4096) = 138
23071      0.000023 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/4-0:1.0/uevent>, "", 4096) = 0
23071      0.000064 read(10</run/udev/data/+usb:4-0:1.0>, "I:11821649\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 207
23071      0.000017 read(10</run/udev/data/+usb:4-0:1.0>, "", 4096) = 0
23071      0.000496 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/uevent>, "MAJOR=189\\nMINOR=384\\nDEVNAME=bus/"..., 4096) = 126
23071      0.000020 read(10</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/uevent>, "", 4096) = 0
23071      0.000066 read(10</run/udev/data/c189:384>, "I:11811050\\nE:ID_VENDOR=Linux_5.8"..., 4096) = 588
23071      0.000017 read(10</run/udev/data/c189:384>, "", 4096) = 0
23071      0.000463 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/uevent>, "MAJOR=189\\nMINOR=2\\nDEVNAME=bus/us"..., 4096) = 130
23071      0.000022 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/uevent>, "", 4096) = 0
23071      0.000066 read(10</run/udev/data/c189:2>, "I:11742972\\nE:ID_VENDOR=SunplusIT"..., 4096) = 449
23071      0.000017 read(10</run/udev/data/c189:2>, "", 4096) = 0
23071      0.000482 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/1-10:1.1/uevent>, "DEVTYPE=usb_interface\\nDRIVER=btu"..., 4096) = 143
23071      0.000020 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/1-10:1.1/uevent>, "", 4096) = 0
23071      0.000071 read(10</run/udev/data/+usb:1-10:1.1>, "I:11741084\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 261
23071      0.000019 read(10</run/udev/data/+usb:1-10:1.1>, "", 4096) = 0
23071      0.000425 read(10</sys/devices/pci0000:00/0000:00:14.0/usb2/uevent>, "MAJOR=189\\nMINOR=128\\nDEVNAME=bus/"..., 4096) = 126
23071      0.000020 read(10</sys/devices/pci0000:00/0000:00:14.0/usb2/uevent>, "", 4096) = 0
23071      0.000066 read(10</run/udev/data/c189:128>, "I:11700758\\nE:ID_VENDOR=Linux_5.8"..., 4096) = 588
23071      0.000017 read(10</run/udev/data/c189:128>, "", 4096) = 0
23071      0.000463 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-0:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=hub"..., 4096) = 138
23071      0.000023 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-0:1.0/uevent>, "", 4096) = 0
23071      0.000064 read(10</run/udev/data/+usb:1-0:1.0>, "I:11711074\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 249
23071      0.000017 read(10</run/udev/data/+usb:1-0:1.0>, "", 4096) = 0
23071      0.000467 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/uevent>, "MAJOR=189\\nMINOR=1\\nDEVNAME=bus/us"..., 4096) = 127
23071      0.000020 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/uevent>, "", 4096) = 0
23071      0.000140 read(10</run/udev/data/c189:1>, "I:11741302\\nE:ID_VENDOR=ELAN\\nE:ID"..., 4096) = 356
23071      0.000017 read(10</run/udev/data/c189:1>, "", 4096) = 0
23071      0.000490 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/1-8:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=uvc"..., 4096) = 150
23071      0.000022 read(10</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/1-8:1.0/uevent>, "", 4096) = 0
23071      0.000063 read(10</run/udev/data/+usb:1-8:1.0>, "I:11757325\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 286
23071      0.000018 read(10</run/udev/data/+usb:1-8:1.0>, "", 4096) = 0
23071      0.000449 read(10</sys/devices/pci0000:00/0000:00:14.0/usb2/2-0:1.0/uevent>, "DEVTYPE=usb_interface\\nDRIVER=hub"..., 4096) = 138
23071      0.000020 read(10</sys/devices/pci0000:00/0000:00:14.0/usb2/2-0:1.0/uevent>, "", 4096) = 0
23071      0.000082 read(10</run/udev/data/+usb:2-0:1.0>, "I:11710449\\nE:ID_USB_CLASS_FROM_D"..., 4096) = 207
23071      0.000029 read(10</run/udev/data/+usb:2-0:1.0>, "", 4096) = 0
23071      0.000403 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/uevent>, "MAJOR=189\\nMINOR=0\\nDEVNAME=bus/us"..., 4096) = 124
23071      0.000031 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/uevent>, "", 4096) = 0
23071      0.000077 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/busnum>, "1\\n", 4096) = 2
23071      0.000061 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/devnum>, "1\\n", 4096) = 2
23071      0.000059 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/speed>, "480\\n", 4096) = 4
23071      0.000041 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/descriptors>, "\\22\\1\\0\\2\\t\\0\\1@k\\35\\2\\0\\10\\5\\3\\2\\1\\1\\t\\2\\31\\0\\1\\1\\0\\340\\0\\t\\4\\0\\0\\1"..., 1024) = 43
23071      0.000250 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/uevent>, "MAJOR=189\\nMINOR=4\\nDEVNAME=bus/us"..., 4096) = 125
23071      0.000020 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/uevent>, "", 4096) = 0
23071      0.000076 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/busnum>, "1\\n", 4096) = 2
23071      0.000063 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/devnum>, "5\\n", 4096) = 2
23071      0.000059 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/speed>, "12\\n", 4096) = 3
23071      0.000040 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-10/descriptors>, "\\22\\1\\1\\2\\340\\1\\1@\\207\\200&\\0\\2\\0\\0\\0\\0\\1\\t\\2\\310\\0\\2\\1\\0\\3402\\t\\4\\0\\0\\3"..., 1024) = 218
23071      0.000254 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/uevent>, "MAJOR=189\\nMINOR=1\\nDEVNAME=bus/us"..., 4096) = 127
23071      0.000020 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/uevent>, "", 4096) = 0
23071      0.000069 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/busnum>, "1\\n", 4096) = 2
23071      0.000058 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/devnum>, "2\\n", 4096) = 2
23071      0.000058 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/speed>, "12\\n", 4096) = 3
23071      0.000039 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/descriptors>, "\\22\\1\\0\\2\\0\\0\\0\\10\\363\\4\\233(\\23W\\4\\16\\0\\1\\t\\2)\\0\\1\\1\\0\\3402\\t\\4\\0\\0\\2"..., 1024) = 59
23071      0.000261 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/uevent>, "MAJOR=189\\nMINOR=2\\nDEVNAME=bus/us"..., 4096) = 130
23071      0.000024 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/uevent>, "", 4096) = 0
23071      0.000091 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/busnum>, "1\\n", 4096) = 2
23071      0.000060 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/devnum>, "3\\n", 4096) = 2
23071      0.000058 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/speed>, "480\\n", 4096) = 4
23071      0.000040 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/descriptors>, "\\22\\1\\1\\2\\357\\2\\1@\\206Y\\23!\\"T\\1\\2\\0\\1\\t\\2\\2\\4\\2\\1\\0\\200\\372\\10\\v\\0\\2\\16"..., 1024) = 1024
23071      0.000018 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-8/descriptors>, "\\5\\300\\23\\1\\t\\4\\1\\v\\1\\16\\2\\0\\0\\7\\5\\201\\5\\374\\23\\1", 1024) = 20
23071      0.000253 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/uevent>, "MAJOR=189\\nMINOR=3\\nDEVNAME=bus/us"..., 4096) = 127
23071      0.000020 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/uevent>, "", 4096) = 0
23071      0.000069 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/busnum>, "1\\n", 4096) = 2
23071      0.000059 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/devnum>, "4\\n", 4096) = 2
23071      0.000058 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/speed>, "12\\n", 4096) = 3
23071      0.000041 read(8</sys/devices/pci0000:00/0000:00:14.0/usb1/1-9/descriptors>, "\\22\\1\\0\\2\\377\\20\\377\\10\\313\\6\\275\\0\\0\\0\\0\\0\\1\\1\\t\\2'\\0\\1\\1\\0\\2402\\t\\4\\0\\0\\3"..., 1024) = 57
23071      0.000223 read(8</sys/devices/pci0000:00/0000:00:14.0/usb2/uevent>, "MAJOR=189\\nMINOR=128\\nDEVNAME=bus/"..., 4096) = 126
23071      0.000020 read(8</sys/devices/pci0000:00/0000:00:14.0/usb2/uevent>, "", 4096) = 0
23071      0.000073 read(8</sys/devices/pci0000:00/0000:00:14.0/usb2/busnum>, "2\\n", 4096) = 2
23071      0.000059 read(8</sys/devices/pci0000:00/0000:00:14.0/usb2/devnum>, "1\\n", 4096) = 2
23071      0.000058 read(8</sys/devices/pci0000:00/0000:00:14.0/usb2/speed>, "10000\\n", 4096) = 6
23071      0.000042 read(8</sys/devices/pci0000:00/0000:00:14.0/usb2/descriptors>, "\\22\\1\\20\\3\\t\\0\\3\\tk\\35\\3\\0\\10\\5\\3\\2\\1\\1\\t\\2\\37\\0\\1\\1\\0\\340\\0\\t\\4\\0\\0\\1"..., 1024) = 49
23071      0.000303 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/uevent>, "MAJOR=189\\nMINOR=256\\nDEVNAME=bus/"..., 4096) = 126
23071      0.000020 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/uevent>, "", 4096) = 0
23071      0.000069 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/busnum>, "3\\n", 4096) = 2
23071      0.000060 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/devnum>, "1\\n", 4096) = 2
23071      0.000060 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/speed>, "480\\n", 4096) = 4
23071      0.000041 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb3/descriptors>, "\\22\\1\\0\\2\\t\\0\\1@k\\35\\2\\0\\10\\5\\3\\2\\1\\1\\t\\2\\31\\0\\1\\1\\0\\340\\0\\t\\4\\0\\0\\1"..., 1024) = 43
23071      0.000309 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/uevent>, "MAJOR=189\\nMINOR=384\\nDEVNAME=bus/"..., 4096) = 126
23071      0.000021 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/uevent>, "", 4096) = 0
23071      0.000068 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/busnum>, "4\\n", 4096) = 2
23071      0.000059 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/devnum>, "1\\n", 4096) = 2
23071      0.000060 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/speed>, "10000\\n", 4096) = 6
23071      0.000041 read(8</sys/devices/pci0000:00/0000:00:1c.4/0000:03:00.0/0000:04:02.0/0000:2b:00.0/usb4/descriptors>, "\\22\\1\\20\\3\\t\\0\\3\\tk\\35\\3\\0\\10\\5\\3\\2\\1\\1\\t\\2\\37\\0\\1\\1\\0\\340\\0\\t\\4\\0\\0\\1"..., 1024) = 49
23071      0.000092 write(9<pipe:[146697]>, "\\1", 1) = 1
23071      0.000422 read(11</sys/devices/pci0000:00/0000:00:14.0/usb1/1-6/product>, "Touchscreen\\n", 128) = 12
23071      0.000195 read(8<pipe:[146697]>, "\\1", 1) = 1
23071      0.000033 write(9<pipe:[146697]>, "\\1", 1) = 1
23071      0.000051 write(7<pipe:[146696]>, "\\1", 1) = 1
23073      0.000024 read(6<pipe:[146696]>, "\\1", 1) = 1
23073      0.000065 +++ exited with 0 +++
23071      0.000069 write(1<pipe:[140973]>, "Bus 004 Device 001: ID 1d6b:0003"..., 531) = 531
23072      0.000031 <... read resumed>"Bus 004 Device 001: ID 1d6b:0003"..., 98304) = 531
23072      0.000013 read(0<pipe:[140973]>, "", 98304) = 0
23071      0.000101 +++ exited with 0 +++
23072      0.000118 +++ exited with 1 +++
23069      0.000197 read(4</usr/share/terminfo/t/tmux-256color>, "\\36\\2#\\0+\\0\\17\\0i\\1\\361\\4tmux-256color|tmux w"..., 32768) = 3217
23069      0.000022 read(4</usr/share/terminfo/t/tmux-256color>, "", 28672) = 0
23069      0.000195 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23071, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23070      0.000201 <... read resumed>"", 4096) = 0
23069      0.000008 +++ exited with 1 +++
23070      0.000158 +++ exited with 0 +++
23068      0.000071 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23069, si_uid=1000, si_status=1, si_utime=0, si_stime=0} ---
23063      0.000162 <... read resumed>"", 128) = 0
23068      0.000008 +++ exited with 0 +++
23063      0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23068, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000284 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23074
23063      0.000132 read(4<pipe:[146115]>,  <unfinished ...>
23074      0.000283 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23075
23074      0.000164 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23076
23074      0.000184 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23077
23075      0.000416 execve("/usr/bin/ps", ["ps", "axk", "pcpu", "o", "comm,pcpu"], 0x55ab89de02e0 /* 93 vars */ <unfinished ...>
23077      0.000016 read(0<pipe:[143968]>,  <unfinished ...>
23076      0.000115 execve("/usr/bin/tail", ["tail", "-n", "1"], 0x55ab89de02e0 /* 93 vars */ <unfinished ...>
23075      0.000017 <... execve resumed>) = 0
23076      0.000111 <... execve resumed>) = 0
23075      0.000054 read(4</usr/lib64/libprocps.so.7.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\\\\\0\\0\\0\\0\\0\\0"..., 832) = 832
23076      0.000100 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23075      0.000085 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
23075      0.000133 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23075      0.000192 read(4</usr/lib64/libsystemd.so.0.28.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320B\\1\\0\\0\\0\\0\\0"..., 832) = 832
23076      0.000143 read(4</usr/share/locale/locale.alias>, "# Locale name alias data base.\\n#"..., 4096) = 2998
23075      0.000025 read(4</usr/lib64/librt-2.31.so>,  <unfinished ...>
23076      0.000012 read(4</usr/share/locale/locale.alias>,  <unfinished ...>
23075      0.000006 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\0207\\0\\0\\0\\0\\0\\0"..., 832) = 832
23076      0.000005 <... read resumed>"", 4096) = 0
23076      0.000116 read(0<pipe:[143967]>,  <unfinished ...>
23075      0.000018 read(4</usr/lib64/liblzma.so.5.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3609\\0\\0\\0\\0\\0\\0"..., 832) = 832
23075      0.000128 read(4</usr/lib64/liblz4.so.1.9.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
23075      0.000129 read(4</usr/lib64/libgcrypt.so.20.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\300\\305\\0\\0\\0\\0\\0\\0"..., 832) = 832
23075      0.000112 read(4</usr/lib64/libgcc_s-10-20200723.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3605\\0\\0\\0\\0\\0\\0"..., 832) = 832
23075      0.000112 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
23075      0.000146 read(4</usr/lib64/libgpg-error.so.0.27.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320L\\0\\0\\0\\0\\0\\0"..., 832) = 832
23075      0.000811 read(4</proc/23075/auxv>, "!\\0\\0\\0\\0\\0\\0\\0\\0\\240\\360Q\\374\\177\\0\\0\\20\\0\\0\\0\\0\\0\\0\\0\\377\\373\\353\\277\\0\\0\\0\\0"..., 1024) = 320
23075      0.000064 read(4</proc/sys/kernel/osrelease>, "5.8.4-200.fc32.x86_64\\n", 1024) = 22
23075      0.000068 read(4</sys/devices/system/cpu/online>, "0-7\\n", 8192) = 4
23075      0.000059 read(4</proc/23075/auxv>, "!\\0\\0\\0\\0\\0\\0\\0\\0\\240\\360Q\\374\\177\\0\\0\\20\\0\\0\\0\\0\\0\\0\\0\\377\\373\\353\\277\\0\\0\\0\\0"..., 1024) = 320
23075      0.000307 read(4</proc/23075/stat>, "23075 (ps) R 23074 23059 2724 34"..., 1024) = 318
23075      0.000108 read(4</proc/uptime>, "2204.71 17008.41\\n", 8191) = 17
23075      0.000060 read(5</usr/share/locale/locale.alias>, "# Locale name alias data base.\\n#"..., 4096) = 2998
23075      0.000036 read(5</usr/share/locale/locale.alias>, "", 4096) = 0
23075      0.000145 read(5</proc/sys/kernel/osrelease>, "5.8.4-200.fc32.x86_64\\n", 1024) = 22
23075      0.000053 read(5</proc/meminfo>, "MemTotal:       16020584 kB\\nMemF"..., 8191) = 1475
23075      0.000320 read(7</proc/1/stat>, "1 (systemd) S 0 1 1 0 -1 4194560"..., 1024) = 188
23075      0.000058 read(7</proc/1/status>, "Name:\\tsystemd\\nUmask:\\t0000\\nState:"..., 1024) = 1024
23075      0.000031 read(7</proc/1/status>, ",00000000,00000000,00000000,0000"..., 1024) = 273
23075      0.000064 read(7</proc/2/stat>, "2 (kthreadd) S 0 0 0 0 -1 212998"..., 2048) = 150
23075      0.000050 read(7</proc/2/status>, "Name:\\tkthreadd\\nUmask:\\t0000\\nState"..., 2048) = 942
23075      0.000062 read(7</proc/3/stat>, "3 (rcu_gp) I 2 0 0 0 -1 69238880"..., 2048) = 151
23075      0.000054 read(7</proc/3/status>, "Name:\\trcu_gp\\nUmask:\\t0000\\nState:\\t"..., 2048) = 934
23075      0.000061 read(7</proc/4/stat>, "4 (rcu_par_gp) I 2 0 0 0 -1 6923"..., 2048) = 155
23075      0.000048 read(7</proc/4/status>, "Name:\\trcu_par_gp\\nUmask:\\t0000\\nSta"..., 2048) = 938
23075      0.000060 read(7</proc/6/stat>, "6 (kworker/0:0H-kblockd) I 2 0 0"..., 2048) = 165
23075      0.000048 read(7</proc/6/status>, "Name:\\tkworker/0:0H-kblockd\\nUmask"..., 2048) = 946
23075      0.000061 read(7</proc/8/stat>, "8 (kworker/u16:0-kcryptd/253:0) "..., 2048) = 177
23075      0.000049 read(7</proc/8/status>, "Name:\\tkworker/u16:0-kcryptd/253:"..., 2048) = 960
23075      0.000061 read(7</proc/9/stat>, "9 (mm_percpu_wq) I 2 0 0 0 -1 69"..., 2048) = 157
23075      0.000047 read(7</proc/9/status>, "Name:\\tmm_percpu_wq\\nUmask:\\t0000\\nS"..., 2048) = 940
23075      0.000062 read(7</proc/10/stat>, "10 (ksoftirqd/0) S 2 0 0 0 -1 69"..., 2048) = 156
23075      0.000047 read(7</proc/10/status>, "Name:\\tksoftirqd/0\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000060 read(7</proc/11/stat>, "11 (rcu_sched) I 2 0 0 0 -1 2129"..., 2048) = 155
23075      0.000047 read(7</proc/11/status>, "Name:\\trcu_sched\\nUmask:\\t0000\\nStat"..., 2048) = 945
23075      0.000060 read(7</proc/12/stat>, "12 (migration/0) S 2 0 0 0 -1 69"..., 2048) = 159
23075      0.000048 read(7</proc/12/status>, "Name:\\tmigration/0\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000065 read(7</proc/13/stat>, "13 (cpuhp/0) S 2 0 0 0 -1 692388"..., 2048) = 152
23075      0.000050 read(7</proc/13/status>, "Name:\\tcpuhp/0\\nUmask:\\t0000\\nState:"..., 2048) = 942
23075      0.000061 read(7</proc/14/stat>, "14 (cpuhp/1) S 2 0 0 0 -1 692391"..., 2048) = 152
23075      0.000047 read(7</proc/14/status>, "Name:\\tcpuhp/1\\nUmask:\\t0000\\nState:"..., 2048) = 942
23075      0.000061 read(7</proc/15/stat>, "15 (migration/1) S 2 0 0 0 -1 69"..., 2048) = 160
23075      0.000047 read(7</proc/15/status>, "Name:\\tmigration/1\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000059 read(7</proc/16/stat>, "16 (ksoftirqd/1) S 2 0 0 0 -1 69"..., 2048) = 156
23075      0.000048 read(7</proc/16/status>, "Name:\\tksoftirqd/1\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000059 read(7</proc/18/stat>, "18 (kworker/1:0H-kblockd) I 2 0 "..., 2048) = 166
23075      0.000048 read(7</proc/18/status>, "Name:\\tkworker/1:0H-kblockd\\nUmask"..., 2048) = 950
23075      0.000060 read(7</proc/19/stat>, "19 (cpuhp/2) S 2 0 0 0 -1 692391"..., 2048) = 152
23075      0.000047 read(7</proc/19/status>, "Name:\\tcpuhp/2\\nUmask:\\t0000\\nState:"..., 2048) = 942
23075      0.000059 read(7</proc/20/stat>, "20 (migration/2) S 2 0 0 0 -1 69"..., 2048) = 160
23075      0.000048 read(7</proc/20/status>, "Name:\\tmigration/2\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000059 read(7</proc/21/stat>, "21 (ksoftirqd/2) S 2 0 0 0 -1 69"..., 2048) = 156
23075      0.000048 read(7</proc/21/status>, "Name:\\tksoftirqd/2\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000058 read(7</proc/23/stat>, "23 (kworker/2:0H-kblockd) I 2 0 "..., 2048) = 166
23075      0.000047 read(7</proc/23/status>, "Name:\\tkworker/2:0H-kblockd\\nUmask"..., 2048) = 950
23075      0.000067 read(7</proc/24/stat>, "24 (cpuhp/3) S 2 0 0 0 -1 692391"..., 2048) = 152
23075      0.000049 read(7</proc/24/status>, "Name:\\tcpuhp/3\\nUmask:\\t0000\\nState:"..., 2048) = 942
23075      0.000060 read(7</proc/25/stat>, "25 (migration/3) S 2 0 0 0 -1 69"..., 2048) = 160
23075      0.000049 read(7</proc/25/status>, "Name:\\tmigration/3\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000060 read(7</proc/26/stat>, "26 (ksoftirqd/3) S 2 0 0 0 -1 69"..., 2048) = 156
23075      0.000048 read(7</proc/26/status>, "Name:\\tksoftirqd/3\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000060 read(7</proc/27/stat>, "27 (kworker/3:0-events) I 2 0 0 "..., 2048) = 163
23075      0.000049 read(7</proc/27/status>, "Name:\\tkworker/3:0-events\\nUmask:\\t"..., 2048) = 950
23075      0.000061 read(7</proc/28/stat>, "28 (kworker/3:0H-kblockd) I 2 0 "..., 2048) = 166
23075      0.000052 read(7</proc/28/status>, "Name:\\tkworker/3:0H-kblockd\\nUmask"..., 2048) = 950
23075      0.000060 read(7</proc/29/stat>, "29 (cpuhp/4) S 2 0 0 0 -1 692391"..., 2048) = 152
23075      0.000047 read(7</proc/29/status>, "Name:\\tcpuhp/4\\nUmask:\\t0000\\nState:"..., 2048) = 942
23075      0.000060 read(7</proc/30/stat>, "30 (migration/4) S 2 0 0 0 -1 69"..., 2048) = 160
23075      0.000049 read(7</proc/30/status>, "Name:\\tmigration/4\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000060 read(7</proc/31/stat>, "31 (ksoftirqd/4) S 2 0 0 0 -1 69"..., 2048) = 156
23075      0.000049 read(7</proc/31/status>, "Name:\\tksoftirqd/4\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000059 read(7</proc/33/stat>, "33 (kworker/4:0H-events_highpri)"..., 2048) = 173
23075      0.000049 read(7</proc/33/status>, "Name:\\tkworker/4:0H-events_highpr"..., 2048) = 957
23075      0.000072 read(7</proc/34/stat>, "34 (cpuhp/5) S 2 0 0 0 -1 692391"..., 2048) = 152
23075      0.000050 read(7</proc/34/status>, "Name:\\tcpuhp/5\\nUmask:\\t0000\\nState:"..., 2048) = 942
23075      0.000061 read(7</proc/35/stat>, "35 (migration/5) S 2 0 0 0 -1 69"..., 2048) = 160
23075      0.000048 read(7</proc/35/status>, "Name:\\tmigration/5\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000106 read(7</proc/36/stat>, "36 (ksoftirqd/5) S 2 0 0 0 -1 69"..., 2048) = 156
23075      0.000049 read(7</proc/36/status>, "Name:\\tksoftirqd/5\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000060 read(7</proc/38/stat>, "38 (kworker/5:0H-kblockd) I 2 0 "..., 2048) = 166
23075      0.000049 read(7</proc/38/status>, "Name:\\tkworker/5:0H-kblockd\\nUmask"..., 2048) = 950
23075      0.000060 read(7</proc/39/stat>, "39 (cpuhp/6) S 2 0 0 0 -1 692391"..., 2048) = 152
23075      0.000048 read(7</proc/39/status>, "Name:\\tcpuhp/6\\nUmask:\\t0000\\nState:"..., 2048) = 942
23075      0.000060 read(7</proc/40/stat>, "40 (migration/6) S 2 0 0 0 -1 69"..., 2048) = 160
23075      0.000048 read(7</proc/40/status>, "Name:\\tmigration/6\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000060 read(7</proc/41/stat>, "41 (ksoftirqd/6) S 2 0 0 0 -1 69"..., 2048) = 156
23075      0.000048 read(7</proc/41/status>, "Name:\\tksoftirqd/6\\nUmask:\\t0000\\nSt"..., 2048) = 948
23075      0.000060 read(7</proc/43/stat>, "43 (kworker/6:0H-events_highpri)"..., 2048) = 173
23075      0.000048 read(7</proc/43/status>, "Name:\\tkworker/6:0H-events_highpr"..., 2048) = 957
23075      0.000060 read(7</proc/44/stat>, "44 (cpuhp/7) S 2 0 0 0 -1 692391"..., 2048) = 152
23075      0.000048 read(7</proc/44/status>, "Name:\\tcpuhp/7\\nUmask:\\t0000\\nState:"..., 2048) = 942
23075      0.000066 read(7</proc/45/stat>, "45 (migration/7) S 2 0 0 0 -1 69"..., 2048) = 160
23075      0.000048 read(7</proc/45/status>, "Name:\\tmigration/7\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000059 read(7</proc/46/stat>, "46 (ksoftirqd/7) S 2 0 0 0 -1 69"..., 2048) = 156
23075      0.000048 read(7</proc/46/status>, "Name:\\tksoftirqd/7\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000060 read(7</proc/48/stat>, "48 (kworker/7:0H-kblockd) I 2 0 "..., 2048) = 166
23075      0.000048 read(7</proc/48/status>, "Name:\\tkworker/7:0H-kblockd\\nUmask"..., 2048) = 950
23075      0.000061 read(7</proc/49/stat>, "49 (kdevtmpfs) S 2 0 0 0 -1 2130"..., 2048) = 153
23075      0.000048 read(7</proc/49/status>, "Name:\\tkdevtmpfs\\nUmask:\\t0022\\nStat"..., 2048) = 947
23075      0.000060 read(7</proc/50/stat>, "50 (netns) I 2 0 0 0 -1 69238880"..., 2048) = 151
23075      0.000049 read(7</proc/50/status>, "Name:\\tnetns\\nUmask:\\t0000\\nState:\\tI"..., 2048) = 937
23075      0.000060 read(7</proc/51/stat>, "51 (rcu_tasks_kthre) S 2 0 0 0 -"..., 2048) = 159
23075      0.000048 read(7</proc/51/status>, "Name:\\trcu_tasks_kthre\\nUmask:\\t000"..., 2048) = 951
23075      0.000060 read(7</proc/52/stat>, "52 (rcu_tasks_rude_) S 2 0 0 0 -"..., 2048) = 159
23075      0.000048 read(7</proc/52/status>, "Name:\\trcu_tasks_rude_\\nUmask:\\t000"..., 2048) = 951
23075      0.000060 read(7</proc/53/stat>, "53 (rcu_tasks_trace) S 2 0 0 0 -"..., 2048) = 159
23075      0.000052 read(7</proc/53/status>, "Name:\\trcu_tasks_trace\\nUmask:\\t000"..., 2048) = 951
23075      0.000060 read(7</proc/54/stat>, "54 (kauditd) S 2 0 0 0 -1 107583"..., 2048) = 154
23075      0.000048 read(7</proc/54/status>, "Name:\\tkauditd\\nUmask:\\t0000\\nState:"..., 2048) = 945
23075      0.000093 read(7</proc/55/stat>, "55 (oom_reaper) S 2 0 0 0 -1 107"..., 2048) = 157
23075      0.000059 read(7</proc/55/status>, "Name:\\toom_reaper\\nUmask:\\t0000\\nSta"..., 2048) = 946
23075      0.000068 read(7</proc/56/stat>, "56 (writeback) I 2 0 0 0 -1 6923"..., 2048) = 155
23075      0.000051 read(7</proc/56/status>, "Name:\\twriteback\\nUmask:\\t0000\\nStat"..., 2048) = 941
23075      0.000063 read(7</proc/57/stat>, "57 (kcompactd0) S 2 0 0 0 -1 107"..., 2048) = 157
23075      0.000042 read(7</proc/57/status>, "Name:\\tkcompactd0\\nUmask:\\t0000\\nSta"..., 2048) = 946
23075      0.000055 read(7</proc/58/stat>, "58 (ksmd) S 2 0 0 0 -1 107583904"..., 2048) = 151
23075      0.000040 read(7</proc/58/status>, "Name:\\tksmd\\nUmask:\\t0000\\nState:\\tS "..., 2048) = 940
23075      0.000051 read(7</proc/59/stat>, "59 (khugepaged) S 2 0 0 0 -1 107"..., 2048) = 158
23075      0.000040 read(7</proc/59/status>, "Name:\\tkhugepaged\\nUmask:\\t0000\\nSta"..., 2048) = 946
23075      0.000051 read(7</proc/78/stat>, "78 (cryptd) I 2 0 0 0 -1 6923888"..., 2048) = 152
23075      0.000040 read(7</proc/78/status>, "Name:\\tcryptd\\nUmask:\\t0000\\nState:\\t"..., 2048) = 938
23075      0.000051 read(7</proc/93/stat>, "93 (kworker/u16:1-events_unbound"..., 2048) = 178
23075      0.000041 read(7</proc/93/status>, "Name:\\tkworker/u16:1-events_unbou"..., 2048) = 964
23075      0.000052 read(7</proc/101/stat>, "101 (kworker/1:1-mm_percpu_wq) I"..., 2048) = 170
23075      0.000040 read(7</proc/101/status>, "Name:\\tkworker/1:1-mm_percpu_wq\\nU"..., 2048) = 960
23075      0.000051 read(7</proc/126/stat>, "126 (kintegrityd) I 2 0 0 0 -1 6"..., 2048) = 158
23075      0.000041 read(7</proc/126/status>, "Name:\\tkintegrityd\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000052 read(7</proc/127/stat>, "127 (kblockd) I 2 0 0 0 -1 69238"..., 2048) = 154
23075      0.000047 read(7</proc/127/status>, "Name:\\tkblockd\\nUmask:\\t0000\\nState:"..., 2048) = 943
23075      0.000058 read(7</proc/128/stat>, "128 (blkcg_punt_bio) I 2 0 0 0 -"..., 2048) = 161
23075      0.000041 read(7</proc/128/status>, "Name:\\tblkcg_punt_bio\\nUmask:\\t0000"..., 2048) = 950
23075      0.000051 read(7</proc/129/stat>, "129 (tpm_dev_wq) I 2 0 0 0 -1 69"..., 2048) = 157
23075      0.000040 read(7</proc/129/status>, "Name:\\ttpm_dev_wq\\nUmask:\\t0000\\nSta"..., 2048) = 946
23075      0.000050 read(7</proc/130/stat>, "130 (ata_sff) I 2 0 0 0 -1 69238"..., 2048) = 154
23075      0.000040 read(7</proc/130/status>, "Name:\\tata_sff\\nUmask:\\t0000\\nState:"..., 2048) = 943
23075      0.000050 read(7</proc/131/stat>, "131 (md) I 2 0 0 0 -1 69238880 0"..., 2048) = 149
23075      0.000040 read(7</proc/131/status>, "Name:\\tmd\\nUmask:\\t0000\\nState:\\tI (i"..., 2048) = 938
23075      0.000050 read(7</proc/132/stat>, "132 (edac-poller) I 2 0 0 0 -1 6"..., 2048) = 158
23075      0.000040 read(7</proc/132/status>, "Name:\\tedac-poller\\nUmask:\\t0000\\nSt"..., 2048) = 947
23075      0.000050 read(7</proc/133/stat>, "133 (devfreq_wq) I 2 0 0 0 -1 69"..., 2048) = 157
23075      0.000040 read(7</proc/133/status>, "Name:\\tdevfreq_wq\\nUmask:\\t0000\\nSta"..., 2048) = 946
23075      0.000050 read(7</proc/134/stat>, "134 (watchdogd) S 2 0 0 0 -1 212"..., 2048) = 157
23075      0.000040 read(7</proc/134/status>, "Name:\\twatchdogd\\nUmask:\\t0000\\nStat"..., 2048) = 949
23075      0.000051 read(7</proc/135/stat>, "135 (pm_wq) I 2 0 0 0 -1 6923888"..., 2048) = 152
23075      0.000040 read(7</proc/135/status>, "Name:\\tpm_wq\\nUmask:\\t0000\\nState:\\tI"..., 2048) = 941
23075      0.000051 read(7</proc/136/stat>, "136 (kswapd0) S 2 0 0 0 -1 10618"..., 2048) = 154
23075      0.000040 read(7</proc/136/status>, "Name:\\tkswapd0\\nUmask:\\t0000\\nState:"..., 2048) = 947
23075      0.000050 read(7</proc/138/stat>, "138 (kthrotld) I 2 0 0 0 -1 6923"..., 2048) = 156
23075      0.000043 read(7</proc/138/status>, "Name:\\tkthrotld\\nUmask:\\t0000\\nState"..., 2048) = 944
23075      0.000050 read(7</proc/139/stat>, "139 (irq/123-pciehp) S 2 0 0 0 -"..., 2048) = 162
23075      0.000045 read(7</proc/139/status>, "Name:\\tirq/123-pciehp\\nUmask:\\t0000"..., 2048) = 952
23075      0.000070 read(7</proc/140/stat>, "140 (irq/127-pciehp) S 2 0 0 0 -"..., 2048) = 162
23075      0.000040 read(7</proc/140/status>, "Name:\\tirq/127-pciehp\\nUmask:\\t0000"..., 2048) = 952
23075      0.000051 read(7</proc/144/stat>, "144 (acpi_thermal_pm) I 2 0 0 0 "..., 2048) = 163
23075      0.000040 read(7</proc/144/status>, "Name:\\tacpi_thermal_pm\\nUmask:\\t000"..., 2048) = 951
23075      0.000051 read(7</proc/146/stat>, "146 (dm_bufio_cache) I 2 0 0 0 -"..., 2048) = 162
23075      0.000040 read(7</proc/146/status>, "Name:\\tdm_bufio_cache\\nUmask:\\t0000"..., 2048) = 950
23075      0.000051 read(7</proc/149/stat>, "149 (ipv6_addrconf) I 2 0 0 0 -1"..., 2048) = 161
23075      0.000040 read(7</proc/149/status>, "Name:\\tipv6_addrconf\\nUmask:\\t0000\\n"..., 2048) = 949
23075      0.000050 read(7</proc/155/stat>, "155 (kstrp) I 2 0 0 0 -1 6923888"..., 2048) = 153
23075      0.000040 read(7</proc/155/status>, "Name:\\tkstrp\\nUmask:\\t0000\\nState:\\tI"..., 2048) = 941
23075      0.000050 read(7</proc/195/stat>, "195 (zswap-shrink) I 2 0 0 0 -1 "..., 2048) = 160
23075      0.000074 read(7</proc/195/status>, "Name:\\tzswap-shrink\\nUmask:\\t0000\\nS"..., 2048) = 948
23075      0.000054 read(7</proc/252/stat>, "252 (kworker/4:2-events) I 2 0 0"..., 2048) = 166
23075      0.000041 read(7</proc/252/status>, "Name:\\tkworker/4:2-events\\nUmask:\\t"..., 2048) = 957
23075      0.000052 read(7</proc/432/stat>, "432 (nvme-wq) I 2 0 0 0 -1 69238"..., 2048) = 155
23075      0.000040 read(7</proc/432/status>, "Name:\\tnvme-wq\\nUmask:\\t0000\\nState:"..., 2048) = 943
23075      0.000051 read(7</proc/434/stat>, "434 (nvme-reset-wq) I 2 0 0 0 -1"..., 2048) = 161
23075      0.000040 read(7</proc/434/status>, "Name:\\tnvme-reset-wq\\nUmask:\\t0000\\n"..., 2048) = 949
23075      0.000051 read(7</proc/436/stat>, "436 (nvme-delete-wq) I 2 0 0 0 -"..., 2048) = 162
23075      0.000044 read(7</proc/436/status>, "Name:\\tnvme-delete-wq\\nUmask:\\t0000"..., 2048) = 950
23075      0.000053 read(7</proc/449/stat>, "449 (kworker/u16:3-kcryptd/253:0"..., 2048) = 179
23075      0.000041 read(7</proc/449/status>, "Name:\\tkworker/u16:3-kcryptd/253:"..., 2048) = 968
23075      0.000052 read(7</proc/450/stat>, "450 (kworker/u16:4-kcryptd/253:0"..., 2048) = 176
23075      0.000041 read(7</proc/450/status>, "Name:\\tkworker/u16:4-kcryptd/253:"..., 2048) = 967
23075      0.000052 read(7</proc/486/stat>, "486 (sdhci) I 2 0 0 0 -1 6923888"..., 2048) = 153
23075      0.000047 read(7</proc/486/status>, "Name:\\tsdhci\\nUmask:\\t0000\\nState:\\tI"..., 2048) = 941
23075      0.000051 read(7</proc/487/stat>, "487 (irq/141-mmc0) S 2 0 0 0 -1 "..., 2048) = 160
23075      0.000040 read(7</proc/487/status>, "Name:\\tirq/141-mmc0\\nUmask:\\t0000\\nS"..., 2048) = 950
23075      0.000051 read(7</proc/494/stat>, "494 (kworker/6:1H-events_highpri"..., 2048) = 175
23075      0.000041 read(7</proc/494/status>, "Name:\\tkworker/6:1H-events_highpr"..., 2048) = 964
23075      0.000051 read(7</proc/507/stat>, "507 (kworker/4:1H-events_highpri"..., 2048) = 175
23075      0.000041 read(7</proc/507/status>, "Name:\\tkworker/4:1H-events_highpr"..., 2048) = 964
23075      0.000051 read(7</proc/706/stat>, "706 (kworker/7:1H-events_highpri"..., 2048) = 175
23075      0.000041 read(7</proc/706/status>, "Name:\\tkworker/7:1H-events_highpr"..., 2048) = 964
23075      0.000051 read(7</proc/744/stat>, "744 (kdmflush) I 2 0 0 0 -1 6923"..., 2048) = 157
23075      0.000041 read(7</proc/744/status>, "Name:\\tkdmflush\\nUmask:\\t0000\\nState"..., 2048) = 944
23075      0.000052 read(7</proc/745/stat>, "745 (kcryptd_io/253:) I 2 0 0 0 "..., 2048) = 164
23075      0.000041 read(7</proc/745/status>, "Name:\\tkcryptd_io/253:\\nUmask:\\t000"..., 2048) = 951
23075      0.000052 read(7</proc/747/stat>, "747 (kcryptd/253:0) I 2 0 0 0 -1"..., 2048) = 162
23075      0.000051 read(7</proc/747/status>, "Name:\\tkcryptd/253:0\\nUmask:\\t0000\\n"..., 2048) = 949
23075      0.000055 read(7</proc/748/stat>, "748 (dmcrypt_write/2) S 2 0 0 0 "..., 2048) = 166
23075      0.000042 read(7</proc/748/status>, "Name:\\tdmcrypt_write/2\\nUmask:\\t000"..., 2048) = 959
23075      0.000052 read(7</proc/814/stat>, "814 (kdmflush) I 2 0 0 0 -1 6923"..., 2048) = 157
23075      0.000040 read(7</proc/814/status>, "Name:\\tkdmflush\\nUmask:\\t0000\\nState"..., 2048) = 944
23075      0.000050 read(7</proc/821/stat>, "821 (kdmflush) I 2 0 0 0 -1 6923"..., 2048) = 157
23075      0.000040 read(7</proc/821/status>, "Name:\\tkdmflush\\nUmask:\\t0000\\nState"..., 2048) = 944
23075      0.000051 read(7</proc/837/stat>, "837 (kworker/1:1H-events_highpri"..., 2048) = 176
23075      0.000040 read(7</proc/837/status>, "Name:\\tkworker/1:1H-events_highpr"..., 2048) = 964
23075      0.000051 read(7</proc/842/stat>, "842 (kworker/u16:6-kcryptd/253:0"..., 2048) = 180
23075      0.000041 read(7</proc/842/status>, "Name:\\tkworker/u16:6-kcryptd/253:"..., 2048) = 967
23075      0.000051 read(7</proc/843/stat>, "843 (kworker/u16:7-kcryptd/253:0"..., 2048) = 179
23075      0.000041 read(7</proc/843/status>, "Name:\\tkworker/u16:7-kcryptd/253:"..., 2048) = 967
23075      0.000051 read(7</proc/844/stat>, "844 (jbd2/dm-1-8) S 2 0 0 0 -1 2"..., 2048) = 160
23075      0.000047 read(7</proc/844/status>, "Name:\\tjbd2/dm-1-8\\nUmask:\\t0000\\nSt"..., 2048) = 955
23075      0.000052 read(7</proc/845/stat>, "845 (ext4-rsv-conver) I 2 0 0 0 "..., 2048) = 164
23075      0.000040 read(7</proc/845/status>, "Name:\\text4-rsv-conver\\nUmask:\\t000"..., 2048) = 951
23075      0.000051 read(7</proc/902/stat>, "902 (kworker/u16:8-kcryptd/253:0"..., 2048) = 176
23075      0.000041 read(7</proc/902/status>, "Name:\\tkworker/u16:8-kcryptd/253:"..., 2048) = 967
23075      0.000051 read(7</proc/903/stat>, "903 (kworker/u16:9-flush-253:1) "..., 2048) = 177
23075      0.000040 read(7</proc/903/status>, "Name:\\tkworker/u16:9-flush-253:1\\n"..., 2048) = 965
23075      0.000051 read(7</proc/940/stat>, "940 (systemd-journal) S 1 940 94"..., 2048) = 183
23075      0.000041 read(7</proc/940/status>, "Name:\\tsystemd-journal\\nUmask:\\t002"..., 2048) = 1320
23075      0.000062 read(7</proc/954/stat>, "954 (kworker/2:1H-events_highpri"..., 2048) = 176
23075      0.000040 read(7</proc/954/status>, "Name:\\tkworker/2:1H-events_highpr"..., 2048) = 964
23075      0.000051 read(7</proc/955/stat>, "955 (kworker/3:1H-kblockd) I 2 0"..., 2048) = 169
23075      0.000041 read(7</proc/955/status>, "Name:\\tkworker/3:1H-kblockd\\nUmask"..., 2048) = 957
23075      0.000052 read(7</proc/957/stat>, "957 (kworker/0:1H-events_highpri"..., 2048) = 176
23075      0.000042 read(7</proc/957/status>, "Name:\\tkworker/0:1H-events_highpr"..., 2048) = 964
23075      0.000052 read(7</proc/958/stat>, "958 (systemd-udevd) S 1 958 958 "..., 2048) = 185
23075      0.000042 read(7</proc/958/status>, "Name:\\tsystemd-udevd\\nUmask:\\t0022\\n"..., 2048) = 1318
23075      0.000055 read(7</proc/961/stat>, "961 (kworker/5:1H-kblockd) I 2 0"..., 2048) = 169
23075      0.000040 read(7</proc/961/status>, "Name:\\tkworker/5:1H-kblockd\\nUmask"..., 2048) = 957
23075      0.000052 read(7</proc/1004/stat>, "1004 (ktpacpid) I 2 0 0 0 -1 692"..., 2048) = 158
23075      0.000041 read(7</proc/1004/status>, "Name:\\tktpacpid\\nUmask:\\t0000\\nState"..., 2048) = 948
23075      0.000051 read(7</proc/1050/stat>, "1050 (irq/143-mei_me) S 2 0 0 0 "..., 2048) = 164
23075      0.000041 read(7</proc/1050/status>, "Name:\\tirq/143-mei_me\\nUmask:\\t0000"..., 2048) = 957
23075      0.000051 read(7</proc/1053/stat>, "1053 (cfg80211) I 2 0 0 0 -1 692"..., 2048) = 158
23075      0.000041 read(7</proc/1053/status>, "Name:\\tcfg80211\\nUmask:\\t0000\\nState"..., 2048) = 948
23075      0.000051 read(7</proc/1068/stat>, "1068 (irq/160-iwlwifi) S 2 0 0 0"..., 2048) = 166
23075      0.000040 read(7</proc/1068/status>, "Name:\\tirq/160-iwlwifi\\nUmask:\\t000"..., 2048) = 961
23075      0.000050 read(7</proc/1069/stat>, "1069 (irq/161-iwlwifi) S 2 0 0 0"..., 2048) = 165
23075      0.000047 read(7</proc/1069/status>, "Name:\\tirq/161-iwlwifi\\nUmask:\\t000"..., 2048) = 960
23075      0.000057 read(7</proc/1070/stat>, "1070 (irq/162-iwlwifi) S 2 0 0 0"..., 2048) = 165
23075      0.000044 read(7</proc/1070/status>, "Name:\\tirq/162-iwlwifi\\nUmask:\\t000"..., 2048) = 961
23075      0.000052 read(7</proc/1071/stat>, "1071 (irq/163-iwlwifi) S 2 0 0 0"..., 2048) = 165
23075      0.000039 read(7</proc/1071/status>, "Name:\\tirq/163-iwlwifi\\nUmask:\\t000"..., 2048) = 960
23075      0.000051 read(7</proc/1072/stat>, "1072 (irq/164-iwlwifi) S 2 0 0 0"..., 2048) = 165
23075      0.000040 read(7</proc/1072/status>, "Name:\\tirq/164-iwlwifi\\nUmask:\\t000"..., 2048) = 960
23075      0.000051 read(7</proc/1073/stat>, "1073 (irq/165-iwlwifi) S 2 0 0 0"..., 2048) = 165
23075      0.000040 read(7</proc/1073/status>, "Name:\\tirq/165-iwlwifi\\nUmask:\\t000"..., 2048) = 960
23075      0.000050 read(7</proc/1074/stat>, "1074 (irq/166-iwlwifi) S 2 0 0 0"..., 2048) = 165
23075      0.000040 read(7</proc/1074/status>, "Name:\\tirq/166-iwlwifi\\nUmask:\\t000"..., 2048) = 960
23075      0.000071 read(7</proc/1075/stat>, "1075 (irq/167-iwlwifi) S 2 0 0 0"..., 2048) = 165
23075      0.000040 read(7</proc/1075/status>, "Name:\\tirq/167-iwlwifi\\nUmask:\\t000"..., 2048) = 960
23075      0.000060 read(7</proc/1076/stat>, "1076 (irq/168-iwlwifi) S 2 0 0 0"..., 2048) = 165
23075      0.000041 read(7</proc/1076/status>, "Name:\\tirq/168-iwlwifi\\nUmask:\\t000"..., 2048) = 960
23075      0.000051 read(7</proc/1077/stat>, "1077 (irq/169-iwlwifi) S 2 0 0 0"..., 2048) = 165
23075      0.000041 read(7</proc/1077/status>, "Name:\\tirq/169-iwlwifi\\nUmask:\\t000"..., 2048) = 957
23075      0.000051 read(7</proc/1103/stat>, "1103 (kworker/u17:2-i915_flip) I"..., 2048) = 175
23075      0.000041 read(7</proc/1103/status>, "Name:\\tkworker/u17:2-i915_flip\\nUm"..., 2048) = 969
23075      0.000052 read(7</proc/1115/stat>, "1115 (kdmflush) I 2 0 0 0 -1 692"..., 2048) = 158
23075      0.000040 read(7</proc/1115/status>, "Name:\\tkdmflush\\nUmask:\\t0000\\nState"..., 2048) = 948
23075      0.000051 read(7</proc/1177/stat>, "1177 (jbd2/nvme0n1p9-) S 2 0 0 0"..., 2048) = 164
23075      0.000042 read(7</proc/1177/status>, "Name:\\tjbd2/nvme0n1p9-\\nUmask:\\t000"..., 2048) = 959
23075      0.000054 read(7</proc/1178/stat>, "1178 (ext4-rsv-conver) I 2 0 0 0"..., 2048) = 165
23075      0.000039 read(7</proc/1178/status>, "Name:\\text4-rsv-conver\\nUmask:\\t000"..., 2048) = 955
23075      0.000052 read(7</proc/1179/stat>, "1179 (jbd2/dm-3-8) S 2 0 0 0 -1 "..., 2048) = 162
23075      0.000040 read(7</proc/1179/status>, "Name:\\tjbd2/dm-3-8\\nUmask:\\t0000\\nSt"..., 2048) = 960
23075      0.000054 read(7</proc/1180/stat>, "1180 (ext4-rsv-conver) I 2 0 0 0"..., 2048) = 165
23075      0.000041 read(7</proc/1180/status>, "Name:\\text4-rsv-conver\\nUmask:\\t000"..., 2048) = 955
23075      0.000051 read(7</proc/1202/stat>, "1202 (auditd) S 1 1202 1202 0 -1"..., 2048) = 178
23075      0.000042 read(7</proc/1202/status>, "Name:\\tauditd\\nUmask:\\t0022\\nState:\\t"..., 2048) = 1315
23075      0.000056 read(7</proc/1204/stat>, "1204 (sedispatch) S 1202 1202 12"..., 2048) = 185
23075      0.000041 read(7</proc/1204/status>, "Name:\\tsedispatch\\nUmask:\\t0022\\nSta"..., 2048) = 1322
23075      0.000055 read(7</proc/1222/stat>, "1222 (rpciod) I 2 0 0 0 -1 69238"..., 2048) = 156
23075      0.000040 read(7</proc/1222/status>, "Name:\\trpciod\\nUmask:\\t0000\\nState:\\t"..., 2048) = 946
23075      0.000051 read(7</proc/1223/stat>, "1223 (xprtiod) I 2 0 0 0 -1 6923"..., 2048) = 157
23075      0.000040 read(7</proc/1223/status>, "Name:\\txprtiod\\nUmask:\\t0000\\nState:"..., 2048) = 947
23075      0.000052 read(7</proc/1224/stat>, "1224 (ModemManager) S 1 1224 122"..., 2048) = 179
23075      0.000042 read(7</proc/1224/status>, "Name:\\tModemManager\\nUmask:\\t0022\\nS"..., 2048) = 1323
23075      0.000056 read(7</proc/1226/stat>, "1226 (alsactl) S 1 1226 1226 0 -"..., 2048) = 170
23075      0.000040 read(7</proc/1226/status>, "Name:\\talsactl\\nUmask:\\t0022\\nState:"..., 2048) = 1312
23075      0.000055 read(7</proc/1227/stat>, "1227 (avahi-daemon) S 1 1227 122"..., 2048) = 178
23075      0.000045 read(7</proc/1227/status>, "Name:\\tavahi-daemon\\nUmask:\\t0022\\nS"..., 2048) = 1329
23075      0.000061 read(7</proc/1228/stat>, "1228 (bluetoothd) S 1 1228 1228 "..., 2048) = 174
23075      0.000044 read(7</proc/1228/status>, "Name:\\tbluetoothd\\nUmask:\\t0077\\nSta"..., 2048) = 1320
23075      0.000055 read(7</proc/1229/stat>, "1229 (boltd) S 1 1229 1229 0 -1 "..., 2048) = 171
23075      0.000041 read(7</proc/1229/status>, "Name:\\tboltd\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1315
23075      0.000055 read(7</proc/1233/stat>, "1233 (earlyoom) S 1 1233 1233 0 "..., 2048) = 171
23075      0.000040 read(7</proc/1233/status>, "Name:\\tearlyoom\\nUmask:\\t0022\\nState"..., 2048) = 1357
23075      0.000056 read(7</proc/1234/stat>, "1234 (firewalld) S 1 1234 1234 0"..., 2048) = 186
23075      0.000041 read(7</proc/1234/status>, "Name:\\tfirewalld\\nUmask:\\t0022\\nStat"..., 2048) = 1315
23075      0.000055 read(7</proc/1237/stat>, "1237 (irqbalance) S 1 1237 1237 "..., 2048) = 174
23075      0.000040 read(7</proc/1237/status>, "Name:\\tirqbalance\\nUmask:\\t0022\\nSta"..., 2048) = 1316
23075      0.000054 read(7</proc/1240/stat>, "1240 (mcelog) S 1 1240 1240 0 -1"..., 2048) = 169
23075      0.000048 read(7</proc/1240/status>, "Name:\\tmcelog\\nUmask:\\t0022\\nState:\\t"..., 2048) = 1310
23075      0.000052 read(7</proc/1243/stat>, "1243 (rsyslogd) S 1 1243 1243 0 "..., 2048) = 186
23075      0.000041 read(7</proc/1243/status>, "Name:\\trsyslogd\\nUmask:\\t0066\\nState"..., 2048) = 1313
23075      0.000055 read(7</proc/1251/stat>, "1251 (smartd) S 1 1251 1251 0 -1"..., 2048) = 174
23075      0.000040 read(7</proc/1251/status>, "Name:\\tsmartd\\nUmask:\\t0022\\nState:\\t"..., 2048) = 1310
23075      0.000054 read(7</proc/1258/stat>, "1258 (sssd) S 1 1258 1258 0 -1 4"..., 2048) = 177
23075      0.000041 read(7</proc/1258/status>, "Name:\\tsssd\\nUmask:\\t0177\\nState:\\tS "..., 2048) = 1310
23075      0.000055 read(7</proc/1262/stat>, "1262 (systemd-homed) S 1 1262 12"..., 2048) = 178
23075      0.000041 read(7</proc/1262/status>, "Name:\\tsystemd-homed\\nUmask:\\t0022\\n"..., 2048) = 1325
23075      0.000053 read(7</proc/1263/stat>, "1263 (systemd-machine) S 1 1263 "..., 2048) = 179
23075      0.000045 read(7</proc/1263/status>, "Name:\\tsystemd-machine\\nUmask:\\t002"..., 2048) = 1326
23075      0.000054 read(7</proc/1270/stat>, "1270 (avahi-daemon) S 1227 1227 "..., 2048) = 172
23075      0.000041 read(7</proc/1270/status>, "Name:\\tavahi-daemon\\nUmask:\\t0022\\nS"..., 2048) = 1327
23075      0.000055 read(7</proc/1281/stat>, "1281 (dbus-broker-lau) S 1 1281 "..., 2048) = 180
23075      0.000046 read(7</proc/1281/status>, "Name:\\tdbus-broker-lau\\nUmask:\\t002"..., 2048) = 1334
23075      0.000055 read(7</proc/1292/stat>, "1292 (chronyd) S 1 1289 1289 0 -"..., 2048) = 170
23075      0.000041 read(7</proc/1292/status>, "Name:\\tchronyd\\nUmask:\\t0022\\nState:"..., 2048) = 1327
23075      0.000056 read(7</proc/1293/stat>, "1293 (abrtd) S 1 1293 1293 0 -1 "..., 2048) = 173
23075      0.000041 read(7</proc/1293/status>, "Name:\\tabrtd\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1311
23075      0.000055 read(7</proc/1297/stat>, "1297 (sssd_be) S 1258 1297 1258 "..., 2048) = 183
23075      0.000040 read(7</proc/1297/status>, "Name:\\tsssd_be\\nUmask:\\t0177\\nState:"..., 2048) = 1315
23075      0.000055 read(7</proc/1298/stat>, "1298 (dbus-broker) S 1281 1281 1"..., 2048) = 180
23075      0.000040 read(7</proc/1298/status>, "Name:\\tdbus-broker\\nUmask:\\t0022\\nSt"..., 2048) = 1335
23075      0.000055 read(7</proc/1312/stat>, "1312 (sssd_nss) S 1258 1312 1258"..., 2048) = 185
23075      0.000040 read(7</proc/1312/status>, "Name:\\tsssd_nss\\nUmask:\\t0177\\nState"..., 2048) = 1316
23075      0.000056 read(7</proc/1314/stat>, "1314 (polkitd) S 1 1314 1314 0 -"..., 2048) = 191
23075      0.000042 read(7</proc/1314/status>, "Name:\\tpolkitd\\nUmask:\\t0022\\nState:"..., 2048) = 1335
23075      0.000067 read(7</proc/1369/stat>, "1369 (systemd-logind) S 1 1369 1"..., 2048) = 181
23075      0.000044 read(7</proc/1369/status>, "Name:\\tsystemd-logind\\nUmask:\\t0022"..., 2048) = 1326
23075      0.000057 read(7</proc/1373/stat>, "1373 (abrt-dump-journ) S 1 1373 "..., 2048) = 193
23075      0.000055 read(7</proc/1373/status>, "Name:\\tabrt-dump-journ\\nUmask:\\t002"..., 2048) = 1320
23075      0.000057 read(7</proc/1374/stat>, "1374 (abrt-dump-journ) S 1 1374 "..., 2048) = 194
23075      0.000040 read(7</proc/1374/status>, "Name:\\tabrt-dump-journ\\nUmask:\\t002"..., 2048) = 1320
23075      0.000054 read(7</proc/1375/stat>, "1375 (abrt-dump-journ) S 1 1375 "..., 2048) = 194
23075      0.000040 read(7</proc/1375/status>, "Name:\\tabrt-dump-journ\\nUmask:\\t002"..., 2048) = 1320
23075      0.000053 read(7</proc/1376/stat>, "1376 (systemd-userdbd) S 1 1376 "..., 2048) = 186
23075      0.000042 read(7</proc/1376/status>, "Name:\\tsystemd-userdbd\\nUmask:\\t002"..., 2048) = 1325
23075      0.000054 read(7</proc/1381/stat>, "1381 (NetworkManager) S 1 1381 1"..., 2048) = 185
23075      0.000041 read(7</proc/1381/status>, "Name:\\tNetworkManager\\nUmask:\\t0022"..., 2048) = 1322
23075      0.000055 read(7</proc/1398/stat>, "1398 (cupsd) S 1 1398 1398 0 -1 "..., 2048) = 170
23075      0.000041 read(7</proc/1398/status>, "Name:\\tcupsd\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1309
23075      0.000055 read(7</proc/1408/stat>, "1408 (gssproxy) S 1 1408 1408 0 "..., 2048) = 169
23075      0.000040 read(7</proc/1408/status>, "Name:\\tgssproxy\\nUmask:\\t0177\\nState"..., 2048) = 1311
23075      0.000065 read(7</proc/1712/stat>, "1712 (wpa_supplicant) S 1 1712 1"..., 2048) = 183
23075      0.000043 read(7</proc/1712/status>, "Name:\\twpa_supplicant\\nUmask:\\t0022"..., 2048) = 1319
23075      0.000054 read(7</proc/2279/stat>, "2279 (atd) S 1 2279 2279 0 -1 41"..., 2048) = 163
23075      0.000041 read(7</proc/2279/status>, "Name:\\tatd\\nUmask:\\t0022\\nState:\\tS ("..., 2048) = 1306
23075      0.000053 read(7</proc/2280/stat>, "2280 (crond) S 1 2280 2280 0 -1 "..., 2048) = 179
23075      0.000041 read(7</proc/2280/status>, "Name:\\tcrond\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1309
23075      0.000054 read(7</proc/2288/stat>, "2288 (systemd) S 1 2288 2288 0 -"..., 2048) = 316
23075      0.000048 read(7</proc/2288/status>, "Name:\\tsystemd\\nUmask:\\t0022\\nState:"..., 2048) = 1344
23075      0.000058 read(7</proc/2299/stat>, "2299 (login) S 1 2299 2299 0 -1 "..., 2048) = 174
23075      0.000040 read(7</proc/2299/status>, "Name:\\tlogin\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1328
23075      0.000055 read(7</proc/2301/stat>, "2301 ((sd-pam)) S 2288 2288 2288"..., 2048) = 173
23075      0.000041 read(7</proc/2301/status>, "Name:\\t(sd-pam)\\nUmask:\\t0022\\nState"..., 2048) = 1337
23075      0.000056 read(7</proc/2349/stat>, "2349 (sway) S 2299 2349 2349 102"..., 2048) = 329
23075      0.000044 read(7</proc/2349/status>, "Name:\\tsway\\nUmask:\\t0002\\nState:\\tS "..., 2048) = 1348
23075      0.000054 read(7</proc/2436/stat>, "2436 (swaybg) S 1 2349 2349 1025"..., 2048) = 313
23075      0.000042 read(7</proc/2436/status>, "Name:\\tswaybg\\nUmask:\\t0002\\nState:\\t"..., 2048) = 1340
23075      0.000055 read(7</proc/2438/stat>, "2438 (swaybar) S 1 2349 2349 102"..., 2048) = 314
23075      0.000041 read(7</proc/2438/status>, "Name:\\tswaybar\\nUmask:\\t0002\\nState:"..., 2048) = 1344
23075      0.000055 read(7</proc/2440/stat>, "2440 (mako) S 1 2439 2439 0 -1 4"..., 2048) = 303
23075      0.000041 read(7</proc/2440/status>, "Name:\\tmako\\nUmask:\\t0002\\nState:\\tS "..., 2048) = 1337
23075      0.000055 read(7</proc/2442/stat>, "2442 (swayidle) S 1 2441 2441 0 "..., 2048) = 305
23075      0.000042 read(7</proc/2442/status>, "Name:\\tswayidle\\nUmask:\\t0002\\nState"..., 2048) = 1342
23075      0.000054 read(7</proc/2443/stat>, "2443 (sh) S 2438 2349 2349 1025 "..., 2048) = 329
23075      0.000054 read(7</proc/2443/status>, "Name:\\tsh\\nUmask:\\t0002\\nState:\\tS (s"..., 2048) = 1341
23075      0.000053 read(7</proc/2444/stat>, "2444 (dbus-broker-lau) S 2288 24"..., 2048) = 317
23075      0.000041 read(7</proc/2444/status>, "Name:\\tdbus-broker-lau\\nUmask:\\t002"..., 2048) = 1353
23075      0.000055 read(7</proc/2462/stat>, "2462 (dbus-broker) S 2444 2444 2"..., 2048) = 311
23075      0.000047 read(7</proc/2462/status>, "Name:\\tdbus-broker\\nUmask:\\t0022\\nSt"..., 2048) = 1349
23075      0.000057 read(7</proc/2483/stat>, "2483 (pulseaudio) S 2288 2483 24"..., 2048) = 318
23075      0.000042 read(7</proc/2483/status>, "Name:\\tpulseaudio\\nUmask:\\t0077\\nSta"..., 2048) = 1356
23075      0.000196 read(7</proc/2484/stat>, "2484 (rtkit-daemon) S 1 2484 248"..., 2048) = 172
23075      0.000044 read(7</proc/2484/status>, "Name:\\trtkit-daemon\\nUmask:\\t0777\\nS"..., 2048) = 1332
23075      0.000056 read(7</proc/2497/stat>, "2497 (krfcommd) S 2 0 0 0 -1 213"..., 2048) = 158
23075      0.000042 read(7</proc/2497/status>, "Name:\\tkrfcommd\\nUmask:\\t0000\\nState"..., 2048) = 952
23075      0.000053 read(7</proc/2635/stat>, "2635 (alacritty) S 1 2634 2634 0"..., 2048) = 320
23075      0.000043 read(7</proc/2635/status>, "Name:\\talacritty\\nUmask:\\t0002\\nStat"..., 2048) = 1349
23075      0.000055 read(7</proc/2640/stat>, "2640 (bash) S 2635 2640 2640 348"..., 2048) = 330
23075      0.000042 read(7</proc/2640/status>, "Name:\\tbash\\nUmask:\\t0002\\nState:\\tS "..., 2048) = 1342
23075      0.000054 read(7</proc/2721/stat>, "2721 (tmux: client) S 2640 2721 "..., 2048) = 328
23075      0.000042 read(7</proc/2721/status>, "Name:\\ttmux: client\\nUmask:\\t0002\\nS"..., 2048) = 1350
23075      0.000055 read(7</proc/2723/stat>, "2723 (tmux: server) S 1 2723 272"..., 2048) = 329
23075      0.000041 read(7</proc/2723/status>, "Name:\\ttmux: server\\nUmask:\\t0002\\nS"..., 2048) = 1349
23075      0.000054 read(7</proc/2724/stat>, "2724 (bash) S 2723 2724 2724 348"..., 2048) = 336
23075      0.000042 read(7</proc/2724/status>, "Name:\\tbash\\nUmask:\\t0002\\nState:\\tS "..., 2048) = 1343
23075      0.000057 read(7</proc/3542/stat>, "3542 (Xwayland) S 1 2349 2349 10"..., 2048) = 336
23075      0.000048 read(7</proc/3542/status>, "Name:\\tXwayland\\nUmask:\\t0002\\nState"..., 2048) = 1348
23075      0.000061 read(7</proc/3571/stat>, "3571 (MainThread) S 1 3570 3570 "..., 2048) = 342
23075      0.000055 read(7</proc/3571/status>, "Name:\\tMainThread\\nUmask:\\t0002\\nSta"..., 2048) = 1353
23075      0.000054 read(7</proc/3610/stat>, "3610 (gvfsd) S 2288 3610 3610 0 "..., 2048) = 309
23075      0.000041 read(7</proc/3610/status>, "Name:\\tgvfsd\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1343
23075      0.000054 read(7</proc/3615/stat>, "3615 (gvfsd-fuse) S 2288 3610 36"..., 2048) = 319
23075      0.000042 read(7</proc/3615/status>, "Name:\\tgvfsd-fuse\\nUmask:\\t0022\\nSta"..., 2048) = 1346
23075      0.000055 read(7</proc/3726/stat>, "3726 (pcscd) S 1 3726 3726 0 -1 "..., 2048) = 171
23075      0.000041 read(7</proc/3726/status>, "Name:\\tpcscd\\nUmask:\\t0022\\nState:\\tS"..., 2048) = 1309
23075      0.000055 read(7</proc/3742/stat>, "3742 (at-spi-bus-laun) S 2288 37"..., 2048) = 320
23075      0.000041 read(7</proc/3742/status>, "Name:\\tat-spi-bus-laun\\nUmask:\\t002"..., 2048) = 1352
23075      0.000055 read(7</proc/3791/stat>, "3791 (dbus-broker-lau) S 3742 37"..., 2048) = 315
23075      0.000041 read(7</proc/3791/status>, "Name:\\tdbus-broker-lau\\nUmask:\\t002"..., 2048) = 1352
23075      0.000054 read(7</proc/3792/stat>, "3792 (dbus-broker) S 3791 3742 3"..., 2048) = 309
23075      0.000041 read(7</proc/3792/status>, "Name:\\tdbus-broker\\nUmask:\\t0022\\nSt"..., 2048) = 1348
23075      0.000113 read(7</proc/3793/stat>, "3793 (at-spi2-registr) S 2288 37"..., 2048) = 315
23075      0.000049 read(7</proc/3793/status>, "Name:\\tat-spi2-registr\\nUmask:\\t002"..., 2048) = 1352
23075      0.000060 read(7</proc/3834/stat>, "3834 (WebExtensions) S 3571 3570"..., 2048) = 337
23075      0.000058 read(7</proc/3834/status>, "Name:\\tWebExtensions\\nUmask:\\t0002\\n"..., 2048) = 1362
23075      0.000060 read(7</proc/3960/stat>, "3960 (Privileged Cont) S 3571 35"..., 2048) = 333
23075      0.000049 read(7</proc/3960/status>, "Name:\\tPrivileged Cont\\nUmask:\\t000"..., 2048) = 1362
23075      0.000056 read(7</proc/4042/stat>, "4042 (file:// Content) S 3571 35"..., 2048) = 339
23075      0.000049 read(7</proc/4042/status>, "Name:\\tfile:// Content\\nUmask:\\t000"..., 2048) = 1366
23075      0.000060 read(7</proc/6728/stat>, "6728 (kworker/4:0-events) I 2 0 "..., 2048) = 168
23075      0.000042 read(7</proc/6728/status>, "Name:\\tkworker/4:0-events\\nUmask:\\t"..., 2048) = 959
23075      0.000055 read(7</proc/7218/stat>, "7218 (upowerd) S 1 7218 7218 0 -"..., 2048) = 173
23075      0.000049 read(7</proc/7218/status>, "Name:\\tupowerd\\nUmask:\\t0022\\nState:"..., 2048) = 1318
23075      0.000056 read(7</proc/8343/stat>, "8343 (kworker/6:2-events) I 2 0 "..., 2048) = 169
23075      0.000042 read(7</proc/8343/status>, "Name:\\tkworker/6:2-events\\nUmask:\\t"..., 2048) = 959
23075      0.000054 read(7</proc/9683/stat>, "9683 (kworker/u16:5-kcryptd/253:"..., 2048) = 178
23075      0.000042 read(7</proc/9683/status>, "Name:\\tkworker/u16:5-kcryptd/253:"..., 2048) = 970
23075      0.000054 read(7</proc/10422/stat>, "10422 (kworker/7:1-events) I 2 0"..., 2048) = 169
23075      0.000041 read(7</proc/10422/status>, "Name:\\tkworker/7:1-events\\nUmask:\\t"..., 2048) = 962
23075      0.000052 read(7</proc/10728/stat>, "10728 (kworker/3:2-events) I 2 0"..., 2048) = 169
23075      0.000041 read(7</proc/10728/status>, "Name:\\tkworker/3:2-events\\nUmask:\\t"..., 2048) = 963
23075      0.000052 read(7</proc/11162/stat>, "11162 (Web Content) S 3571 3570 "..., 2048) = 327
23075      0.000047 read(7</proc/11162/status>, "Name:\\tWeb Content\\nUmask:\\t0002\\nSt"..., 2048) = 1361
23075      0.000060 read(7</proc/13700/stat>, "13700 (kworker/2:2-events) I 2 0"..., 2048) = 170
23075      0.000043 read(7</proc/13700/status>, "Name:\\tkworker/2:2-events\\nUmask:\\t"..., 2048) = 961
23075      0.000054 read(7</proc/14465/stat>, "14465 (kworker/5:2-mm_percpu_wq)"..., 2048) = 176
23075      0.000042 read(7</proc/14465/status>, "Name:\\tkworker/5:2-mm_percpu_wq\\nU"..., 2048) = 969
23075      0.000053 read(7</proc/16361/stat>, "16361 (kworker/0:2-events) I 2 0"..., 2048) = 170
23075      0.000042 read(7</proc/16361/status>, "Name:\\tkworker/0:2-events\\nUmask:\\t"..., 2048) = 963
23075      0.000053 read(7</proc/17219/stat>, "17219 (kworker/2:0-events) I 2 0"..., 2048) = 170
23075      0.000042 read(7</proc/17219/status>, "Name:\\tkworker/2:0-events\\nUmask:\\t"..., 2048) = 963
23075      0.000052 read(7</proc/17474/stat>, "17474 (kworker/6:0-events) I 2 0"..., 2048) = 170
23075      0.000041 read(7</proc/17474/status>, "Name:\\tkworker/6:0-events\\nUmask:\\t"..., 2048) = 963
23075      0.000053 read(7</proc/17559/stat>, "17559 (kworker/5:0-events) I 2 0"..., 2048) = 170
23075      0.000042 read(7</proc/17559/status>, "Name:\\tkworker/5:0-events\\nUmask:\\t"..., 2048) = 963
23075      0.000052 read(7</proc/17731/stat>, "17731 (kworker/1:2-events_freeza"..., 2048) = 180
23075      0.000041 read(7</proc/17731/status>, "Name:\\tkworker/1:2-events_freezab"..., 2048) = 974
23075      0.000053 read(7</proc/19519/stat>, "19519 (kworker/0:1-mm_percpu_wq)"..., 2048) = 176
23075      0.000042 read(7</proc/19519/status>, "Name:\\tkworker/0:1-mm_percpu_wq\\nU"..., 2048) = 969
23075      0.000054 read(7</proc/20270/stat>, "20270 (systemd-userwor) S 1376 1"..., 2048) = 178
23075      0.000043 read(7</proc/20270/status>, "Name:\\tsystemd-userwor\\nUmask:\\t002"..., 2048) = 1330
23075      0.000057 read(7</proc/20279/stat>, "20279 (kworker/7:2-cgroup_destro"..., 2048) = 178
23075      0.000042 read(7</proc/20279/status>, "Name:\\tkworker/7:2-cgroup_destroy"..., 2048) = 971
23075      0.000053 read(7</proc/20329/stat>, "20329 (kworker/u17:0-rb_allocato"..., 2048) = 179
23075      0.000046 read(7</proc/20329/status>, "Name:\\tkworker/u17:0-rb_allocator"..., 2048) = 970
23075      0.000055 read(7</proc/20377/stat>, "20377 (systemd-userwor) S 1376 1"..., 2048) = 178
23075      0.000041 read(7</proc/20377/status>, "Name:\\tsystemd-userwor\\nUmask:\\t002"..., 2048) = 1330
23075      0.000055 read(7</proc/20504/stat>, "20504 (kworker/2:1-events) I 2 0"..., 2048) = 170
23075      0.000040 read(7</proc/20504/status>, "Name:\\tkworker/2:1-events\\nUmask:\\t"..., 2048) = 962
23075      0.000052 read(7</proc/20691/stat>, "20691 (kworker/6:1-events) I 2 0"..., 2048) = 171
23075      0.000041 read(7</proc/20691/status>, "Name:\\tkworker/6:1-events\\nUmask:\\t"..., 2048) = 963
23075      0.000056 read(7</proc/20777/stat>, "20777 (kworker/u16:2-kcryptd/253"..., 2048) = 179
23075      0.000042 read(7</proc/20777/status>, "Name:\\tkworker/u16:2-kcryptd/253:"..., 2048) = 973
23075      0.000054 read(7</proc/20864/stat>, "20864 (kworker/5:1-events) I 2 0"..., 2048) = 170
23075      0.000040 read(7</proc/20864/status>, "Name:\\tkworker/5:1-events\\nUmask:\\t"..., 2048) = 963
23075      0.000052 read(7</proc/21756/stat>, "21756 (kworker/4:1-events) I 2 0"..., 2048) = 170
23075      0.000042 read(7</proc/21756/status>, "Name:\\tkworker/4:1-events\\nUmask:\\t"..., 2048) = 962
23075      0.000053 read(7</proc/22681/stat>, "22681 (systemd-userwor) S 1376 1"..., 2048) = 178
23075      0.000042 read(7</proc/22681/status>, "Name:\\tsystemd-userwor\\nUmask:\\t002"..., 2048) = 1329
23075      0.000055 read(7</proc/22817/stat>, "22817 (kworker/3:1-events) I 2 0"..., 2048) = 170
23075      0.000040 read(7</proc/22817/status>, "Name:\\tkworker/3:1-events\\nUmask:\\t"..., 2048) = 962
23075      0.000055 read(7</proc/23056/stat>, "23056 (sleep) S 2443 2349 2349 1"..., 2048) = 313
23075      0.000046 read(7</proc/23056/status>, "Name:\\tsleep\\nUmask:\\t0002\\nState:\\tS"..., 2048) = 1345
23075      0.000056 read(7</proc/23059/stat>, "23059 (strace-cmd) S 2724 23059 "..., 2048) = 324
23075      0.000043 read(7</proc/23059/status>, "Name:\\tstrace-cmd\\nUmask:\\t0002\\nSta"..., 2048) = 1352
23075      0.000187 read(7</proc/23060/stat>, "23060 (strace) S 23059 23059 272"..., 2048) = 327
23075      0.000049 read(7</proc/23060/status>, "Name:\\tstrace\\nUmask:\\t0002\\nState:\\t"..., 2048) = 1352
23075      0.000058 read(7</proc/23063/stat>, "23063 (system-summary) S 23060 2"..., 2048) = 328
23075      0.000044 read(7</proc/23063/status>, "Name:\\tsystem-summary\\nUmask:\\t0002"..., 2048) = 1363
23075      0.000057 read(7</proc/23074/stat>, "23074 (system-summary) S 23063 2"..., 2048) = 329
23075      0.000044 read(7</proc/23074/status>, "Name:\\tsystem-summary\\nUmask:\\t0002"..., 2048) = 1362
23075      0.000055 read(7</proc/23075/stat>, "23075 (ps) R 23074 23059 2724 34"..., 2048) = 318
23075      0.000043 read(7</proc/23075/status>, "Name:\\tps\\nUmask:\\t0002\\nState:\\tR (r"..., 2048) = 1350
23075      0.000056 read(7</proc/23076/stat>, "23076 (tail) S 23074 23059 2724 "..., 2048) = 311
23075      0.000043 read(7</proc/23076/status>, "Name:\\ttail\\nUmask:\\t0002\\nState:\\tS "..., 2048) = 1352
23075      0.000056 read(7</proc/23077/stat>, "23077 (system-summary) S 23074 2"..., 2048) = 324
23075      0.000046 read(7</proc/23077/status>, "Name:\\tsystem-summary\\nUmask:\\t0002"..., 2048) = 1361
23075      0.000246 write(1<pipe:[143967]>, "COMMAND         %CPU\\nkthreadd   "..., 4096) = 4096
23076      0.000038 <... read resumed>"COMMAND         %CPU\\nkthreadd   "..., 8192) = 4096
23076      0.000017 read(0<pipe:[143967]>,  <unfinished ...>
23075      0.000008 write(1<pipe:[143967]>, "ystemd-userwor  0.0\\nkworker/7:2-"..., 629 <unfinished ...>
23076      0.000013 <... read resumed>"ystemd-userwor  0.0\\nkworker/7:2-"..., 8192) = 629
23075      0.000004 <... write resumed>) = 629
23076      0.000003 read(0<pipe:[143967]>, "", 8192) = 0
23076      0.000049 write(1<pipe:[143968]>, "MainThread      13.0\\n", 21) = 21
23077      0.000021 <... read resumed>"M", 1) = 1
23077      0.000010 read(0<pipe:[143968]>, "a", 1) = 1
23077      0.000020 read(0<pipe:[143968]>, "i", 1) = 1
23077      0.000014 read(0<pipe:[143968]>, "n", 1) = 1
23077      0.000016 read(0<pipe:[143968]>, "T", 1) = 1
23077      0.000016 read(0<pipe:[143968]>, "h", 1) = 1
23077      0.000016 read(0<pipe:[143968]>, "r", 1) = 1
23077      0.000019 read(0<pipe:[143968]>,  <unfinished ...>
23076      0.000005 +++ exited with 0 +++
23077      0.000003 <... read resumed>"e", 1) = 1
23077      0.000008 read(0<pipe:[143968]>, "a", 1) = 1
23077      0.000015 read(0<pipe:[143968]>, "d", 1) = 1
23077      0.000017 read(0<pipe:[143968]>,  <unfinished ...>
23075      0.000005 +++ exited with 0 +++
23077      0.000003 <... read resumed>" ", 1) = 1
23077      0.000011 read(0<pipe:[143968]>, " ", 1) = 1
23077      0.000017 read(0<pipe:[143968]>, " ", 1) = 1
23077      0.000016 read(0<pipe:[143968]>, " ", 1) = 1
23077      0.000016 read(0<pipe:[143968]>, " ", 1) = 1
23077      0.000016 read(0<pipe:[143968]>, " ", 1) = 1
23077      0.000016 read(0<pipe:[143968]>, "1", 1) = 1
23077      0.000016 read(0<pipe:[143968]>, "3", 1) = 1
23077      0.000016 read(0<pipe:[143968]>, ".", 1) = 1
23077      0.000016 read(0<pipe:[143968]>, "0", 1) = 1
23077      0.000016 read(0<pipe:[143968]>, "\\n", 1) = 1
23077      0.000229 write(1<pipe:[146115]>, "MainThread: \\33[0;33m13%\\33[0m", 26) = 26
23063      0.000019 <... read resumed>"MainThread: \\33[0;33m13%\\33[0m", 128) = 26
23063      0.000018 read(4<pipe:[146115]>,  <unfinished ...>
23077      0.000100 +++ exited with 0 +++
23074      0.000062 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23076, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000151 <... read resumed>"", 128) = 0
23074      0.000003 +++ exited with 0 +++
23063      0.000008 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23074, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000259 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23078
23063      0.000105 read(4<pipe:[146116]>, "", 128) = 0
23078      0.000329 +++ exited with 1 +++
23063      0.000002 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23078, si_uid=1000, si_status=1, si_utime=0, si_stime=0} ---
23063      0.000179 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23079
23063      0.000090 read(4<pipe:[146117]>,  <unfinished ...>
23079      0.000227 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23080
23079      0.000108 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23081
23080      0.000396 execve("/usr/bin/nmcli", ["nmcli", "--get-values", "NAME", "--color", "no", "connection", "show", "--active"], 0x55ab89de02e0 /* 93 vars */ <unfinished ...>
23081      0.000084 execve("/usr/bin/sed", ["sed", "\\n      :start\\n      $!{\\n        "...], 0x55ab89de02e0 /* 93 vars */ <unfinished ...>
23080      0.000058 <... execve resumed>) = 0
23081      0.000063 <... execve resumed>) = 0
23080      0.000080 read(4</usr/lib64/libnm.so.0.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\360\\206\\4\\0\\0\\0\\0\\0"..., 832) = 832
23081      0.000067 read(4</usr/lib64/libacl.so.1.1.2253>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20'\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000103 read(4</usr/lib64/libreadline.so.8.0>,  <unfinished ...>
23081      0.000011 read(4</usr/lib64/libselinux.so.1>,  <unfinished ...>
23080      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\220\\222\\1\\0\\0\\0\\0\\0"..., 832) = 832
23081      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\207\\0\\0\\0\\0\\0\\0"..., 832) = 832
23081      0.000097 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000016 read(4</usr/lib64/libpolkit-agent-1.so.0.0.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320T\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000121 read(4</usr/lib64/libpolkit-gobject-1.so.0.0.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260\\220\\0\\0\\0\\0\\0\\0"..., 832) = 832
23081      0.000025 read(4</usr/lib64/libattr.so.1.1.2448>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000095 read(4</usr/lib64/libgio-2.0.so.0.6400.5>,  <unfinished ...>
23081      0.000010 read(4</usr/lib64/libpcre2-8.so.0.10.0>,  <unfinished ...>
23080      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\220\\363\\3\\0\\0\\0\\0\\0"..., 832) = 832
23081      0.000004 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\2604\\0\\0\\0\\0\\0\\0"..., 832) = 832
23081      0.000092 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000033 read(4</usr/lib64/libgobject-2.0.so.0.6400.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260\\336\\0\\0\\0\\0\\0\\0"..., 832) = 832
23081      0.000072 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000033 read(4</usr/lib64/libglib-2.0.so.0.6400.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000\\333\\1\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000139 read(4</usr/lib64/libgcc_s-10-20200723.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3605\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000104 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000133 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000166 read(4</usr/lib64/libgnutls.so.30.28.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0@z\\3\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000119 read(4</usr/lib64/libgmodule-2.0.so.0.6400.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0P\\24\\0\\0\\0\\0\\0\\0"..., 832) = 832
23081      0.000049 read(0<pipe:[141851]>,  <unfinished ...>
23080      0.000056 read(4</usr/lib64/libuuid.so.1.3.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20&\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000113 read(4</usr/lib64/libudev.so.1.6.17>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260N\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000095 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000102 read(4</usr/lib64/libtinfo.so.6.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0P\\364\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000112 read(4</usr/lib64/libsystemd.so.0.28.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320B\\1\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000114 read(4</usr/lib64/libexpat.so.1.6.10>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\360B\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000118 read(4</usr/lib64/libz.so.1.2.11>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3605\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000124 read(4</usr/lib64/libmount.so.1.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20\\366\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000106 read(4</usr/lib64/libselinux.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\207\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000108 read(4</usr/lib64/libresolv-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000G\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000127 read(4</usr/lib64/libffi.so.6.0.2>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\300\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000104 read(4</usr/lib64/libpcre.so.1.2.12>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260#\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000109 read(4</usr/lib64/libp11-kit.so.0.3.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20\\261\\2\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000119 read(4</usr/lib64/libidn2.so.0.3.7>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260%\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000105 read(4</usr/lib64/libunistring.so.2.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\00002\\1\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000098 read(4</usr/lib64/libtasn1.so.6.6.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3606\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000108 read(4</usr/lib64/libnettle.so.7.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200\\252\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000096 read(4</usr/lib64/libhogweed.so.5.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0 \\216\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000110 read(4</usr/lib64/libgmp.so.10.3.2>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\0\\4\\1\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000110 read(4</usr/lib64/librt-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\0207\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000111 read(4</usr/lib64/liblzma.so.5.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3609\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000118 read(4</usr/lib64/liblz4.so.1.9.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000110 read(4</usr/lib64/libgcrypt.so.20.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\300\\305\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000106 read(4</usr/lib64/libblkid.so.1.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\360\\255\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000121 read(4</usr/lib64/libpcre2-8.so.0.10.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\2604\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.000108 read(4</usr/lib64/libgpg-error.so.0.27.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320L\\0\\0\\0\\0\\0\\0"..., 832) = 832
23080      0.003945 read(4</proc/sys/crypto/fips_enabled>, "0\\n", 1024) = 2
23080      0.000102 read(4</usr/share/crypto-policies/DEFAULT/gnutls.txt>, "[overrides]\\ninsecure-hash = STRE"..., 4096) = 1111
23080      0.000050 read(4</usr/share/crypto-policies/DEFAULT/gnutls.txt>, "", 4096) = 0
23080      0.000402 read(4</usr/share/locale/locale.alias>, "# Locale name alias data base.\\n#"..., 4096) = 2998
23080      0.000029 read(4</usr/share/locale/locale.alias>, "", 4096) = 0
23080      0.000128 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23080      0.000049 write(5<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23080      0.000044 clone(child_stack=0x7f01bb0d2bb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[23082], tls=0x7f01bb0d3700, child_tidptr=0x7f01bb0d39d0) = 23082
23082      0.000108 read(5<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23080      0.000038 write(5<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23082      0.000026 read(5<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23080      0.000866 clone(child_stack=0x7f01ba8d1bb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[23083], tls=0x7f01ba8d2700, child_tidptr=0x7f01ba8d29d0) = 23083
23080      0.000050 read(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23083      0.000997 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23083      0.000055 clone(child_stack=0x7f01ba0d0bb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[23084], tls=0x7f01ba0d1700, child_tidptr=0x7f01ba0d19d0) = 23084
23084      0.000099 read(7<anon_inode:[eventfd]>,  <unfinished ...>
23083      0.000014 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8 <unfinished ...>
23084      0.000011 <... read resumed>"\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23083      0.000005 <... write resumed>) = 8
23084      0.000051 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23083      0.000022 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23083      0.000036 read(8<anon_inode:[eventfd]>,  <unfinished ...>
23084      0.000010 read(7<anon_inode:[eventfd]>,  <unfinished ...>
23083      0.000005 <... read resumed>"\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000004 <... read resumed>"\\2\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000074 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000077 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000023 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000030 read(7<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000047 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23083      0.000023 read(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23083      0.000018 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23083      0.000047 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23080      0.000024 read(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000017 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000026 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23080      0.000032 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000025 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23080      0.000033 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000088 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000319 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000064 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000018 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000032 read(7<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000111 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23080      0.000024 read(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000014 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000029 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23080      0.000028 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000023 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000243 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000053 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000017 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000046 read(7<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000478 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000028 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000666 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000066 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000019 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000028 read(7<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.001017 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23080      0.000040 read(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000125 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000050 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23080      0.000173 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000034 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000593 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000068 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000024 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000055 read(7<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000178 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000319 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000234 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000205 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000038 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000038 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23080      0.000113 read(4<anon_inode:[eventfd]>, "\\4\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23080      0.001645 write(1<pipe:[141851]>, "Robert77_5G\\n", 12) = 12
23081      0.000029 <... read resumed>"Robert77_5G\\n", 4096) = 12
23080      0.000007 write(4<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8 <unfinished ...>
23081      0.000008 read(0<pipe:[141851]>,  <unfinished ...>
23080      0.000007 <... write resumed>) = 8
23080      0.000064 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000021 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23080      0.000031 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000133 read(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000061 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000087 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000024 write(7<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23084      0.000053 read(7<anon_inode:[eventfd]>, "\\3\\0\\0\\0\\0\\0\\0\\0", 16) = 8
23084      0.000115 +++ exited with 0 +++
23083      0.000003 +++ exited with 0 +++
23082      0.000001 +++ exited with 0 +++
23081      0.000345 <... read resumed>"", 4096) = 0
23080      0.000015 +++ exited with 0 +++
23081      0.000076 write(1<pipe:[146117]>, "Robert77_5G\\n", 12) = 12
23063      0.000025 <... read resumed>"Robert77_5G\\n", 128) = 12
23063      0.000019 read(4<pipe:[146117]>,  <unfinished ...>
23081      0.000129 +++ exited with 0 +++
23079      0.000068 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23080, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000155 <... read resumed>"", 128) = 0
23079      0.000003 +++ exited with 0 +++
23063      0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23079, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000253 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23087
23063      0.000116 read(4<pipe:[143979]>,  <unfinished ...>
23087      0.000525 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23088
23087      0.000093 read(4<pipe:[147490]>,  <unfinished ...>
23088      0.000219 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23089
23088      0.000122 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23090
23089      0.000406 execve("/usr/sbin/iwconfig", ["iwconfig", "wlp0s20f3"], 0x55ab89e04eb0 /* 93 vars */ <unfinished ...>
23090      0.000074 execve("/usr/bin/sed", ["sed", "-n", "s/.*Link Quality=\\\\([0-9]*\\\\)\\\\/\\\\(["...], 0x55ab89e04eb0 /* 93 vars */ <unfinished ...>
23089      0.000061 <... execve resumed>) = 0
23090      0.000060 <... execve resumed>) = 0
23089      0.000069 read(4</usr/lib64/libiw.so.29>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p'\\0\\0\\0\\0\\0\\0"..., 832) = 832
23090      0.000052 read(4</usr/lib64/libacl.so.1.1.2253>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20'\\0\\0\\0\\0\\0\\0"..., 832) = 832
23089      0.000105 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23090      0.000018 read(4</usr/lib64/libselinux.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\207\\0\\0\\0\\0\\0\\0"..., 832) = 832
23090      0.000105 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23089      0.000063 read(4</usr/lib64/libm-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\363\\0\\0\\0\\0\\0\\0"..., 832) = 832
23090      0.000093 read(4</usr/lib64/libattr.so.1.1.2448>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
23090      0.000099 read(4</usr/lib64/libpcre2-8.so.0.10.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\2604\\0\\0\\0\\0\\0\\0"..., 832) = 832
23090      0.000093 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
23090      0.000096 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
23090      0.000779 read(0<pipe:[141017]>,  <unfinished ...>
23089      0.000784 write(1<pipe:[141017]>, "wlp0s20f3  IEEE 802.11  ESSID:\\"R"..., 457) = 457
23090      0.000035 <... read resumed>"wlp0s20f3  IEEE 802.11  ESSID:\\"R"..., 4096) = 457
23089      0.000069 +++ exited with 0 +++
23090      0.000051 read(0<pipe:[141017]>, "", 4096) = 0
23090      0.000026 write(1<pipe:[147490]>, "67*100/70\\n", 10) = 10
23087      0.000023 <... read resumed>"67*100/70\\n", 128) = 10
23087      0.000013 read(4<pipe:[147490]>,  <unfinished ...>
23090      0.000117 +++ exited with 0 +++
23088      0.000059 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23089, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23088      0.000136 +++ exited with 0 +++
23087      0.000008 <... read resumed>"", 128) = 0
23087      0.000011 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23088, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23087      0.000165 write(1<pipe:[143979]>, "wifi: ", 6 <unfinished ...>
23063      0.000056 <... read resumed>"wifi: ", 128) = 6
23087      0.000010 <... write resumed>) = 6
23063      0.000008 read(4<pipe:[143979]>,  <unfinished ...>
23087      0.000082 write(1<pipe:[143979]>, "\\33[0;32m95%\\33[0m", 14) = 14
23063      0.000026 <... read resumed>"\\33[0;32m95%\\33[0m", 128) = 14
23063      0.000011 read(4<pipe:[143979]>, "", 128) = 0
23087      0.000096 +++ exited with 0 +++
23063      0.000005 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23087, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000259 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23091
23063      0.000119 read(4<pipe:[141018]>,  <unfinished ...>
23091      0.000256 write(1<pipe:[141018]>, "fans:", 5) = 5
23063      0.000026 <... read resumed>"fans:", 128) = 5
23063      0.000012 read(4<pipe:[141018]>,  <unfinished ...>
23091      0.000633 write(1<pipe:[141018]>, " ", 1) = 1
23063      0.000021 <... read resumed>" ", 128) = 1
23063      0.000009 read(4<pipe:[141018]>,  <unfinished ...>
23091      0.000121 read(0</sys/devices/platform/thinkpad_hwmon/hwmon/hwmon4/fan1_input>, "0\\n", 128) = 2
23063      0.000654 <... read resumed>"", 128) = 0
23091      0.000005 +++ exited with 1 +++
23063      0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23091, si_uid=1000, si_status=1, si_utime=0, si_stime=0} ---
23063      0.000229 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23092
23063      0.000109 read(4<pipe:[141019]>,  <unfinished ...>
23092      0.000336 read(0</sys/devices/pci0000:00/0000:00:02.0/drm/card0/card0-eDP-1/intel_backlight/brightness>, "14546\\n", 128) = 6
23092      0.000425 read(0</sys/devices/pci0000:00/0000:00:02.0/drm/card0/card0-eDP-1/intel_backlight/max_brightness>, "24242\\n", 128) = 6
23092      0.000090 write(1<pipe:[141019]>, "backlight: ", 11) = 11
23063      0.000019 <... read resumed>"backlight: ", 128) = 11
23063      0.000014 read(4<pipe:[141019]>,  <unfinished ...>
23092      0.000012 write(1<pipe:[141019]>, "60%\\n", 4 <unfinished ...>
23063      0.000012 <... read resumed>"60%\\n", 128) = 4
23092      0.000004 <... write resumed>) = 4
23063      0.000003 read(4<pipe:[141019]>, "", 128) = 0
23092      0.000092 +++ exited with 0 +++
23063      0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23092, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000214 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23093
23063      0.000115 read(4<pipe:[141020]>,  <unfinished ...>
23093      0.000240 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23094
23093      0.000139 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23095
23093      0.000160 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23096
23096      0.000275 read(0<pipe:[146136]>,  <unfinished ...>
23094      0.000052 execve("/usr/bin/amixer", ["amixer", "get", "Master"], 0x55ab89de02e0 /* 93 vars */ <unfinished ...>
23095      0.000082 execve("/usr/bin/sed", ["sed", "-n", "\\n      /\\\\[/{\\n        # delete ev"...], 0x55ab89de02e0 /* 93 vars */ <unfinished ...>
23094      0.000063 <... execve resumed>) = 0
23095      0.000066 <... execve resumed>) = 0
23094      0.000073 read(4</usr/lib64/libm-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\363\\0\\0\\0\\0\\0\\0"..., 832) = 832
23095      0.000057 read(4</usr/lib64/libacl.so.1.1.2253>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20'\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000082 read(4</usr/lib64/libasound.so.2.0.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p*\\3\\0\\0\\0\\0\\0"..., 832) = 832
23095      0.000036 read(4</usr/lib64/libselinux.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\207\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000090 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23095      0.000016 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23095      0.000149 read(4</usr/lib64/libattr.so.1.1.2448>,  <unfinished ...>
23094      0.000006 read(4</usr/lib64/libdl-2.31.so>,  <unfinished ...>
23095      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
23095      0.000096 read(4</usr/lib64/libpcre2-8.so.0.10.0>,  <unfinished ...>
23094      0.000006 read(4</usr/lib64/libpthread-2.31.so>,  <unfinished ...>
23095      0.000005 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\2604\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000004 <... read resumed>"\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
23095      0.000079 read(4</usr/lib64/libdl-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\"\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000032 read(4</usr/lib64/librt-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\0207\\0\\0\\0\\0\\0\\0"..., 832) = 832
23095      0.000069 read(4</usr/lib64/libpthread-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\240\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000644 read(4</usr/share/alsa/alsa.conf>, "#\\n#  ALSA library configuration "..., 4096) = 4096
23095      0.000123 read(0<pipe:[146135]>,  <unfinished ...>
23094      0.000008 read(4</usr/share/alsa/alsa.conf>, "efaults.pcm.device\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\t"..., 4096) = 4096
23094      0.000109 read(4</usr/share/alsa/alsa.conf>, "p.device\\n\\t\\t}\\n\\t}\\n\\thint.descriptio"..., 4096) = 1657
23094      0.000054 read(4</usr/share/alsa/alsa.conf>, "", 4096) = 0
23094      0.000202 read(4</usr/share/alsa/alsa.conf.d/50-pulseaudio.conf>, "# Add a specific named PulseAudi"..., 4096) = 402
23094      0.000030 read(4</usr/share/alsa/alsa.conf.d/50-pulseaudio.conf>, "", 4096) = 0
23094      0.000049 read(4</etc/alsa/conf.d/99-pulseaudio-default.conf>, "# Default to PulseAudio\\n\\npcm.!de"..., 4096) = 201
23094      0.000021 read(4</etc/alsa/conf.d/99-pulseaudio-default.conf>, "", 4096) = 0
23094      0.000065 read(4</etc/asound.conf>, "#\\n# Place your global alsa-lib c"..., 4096) = 55
23094      0.000017 read(4</etc/asound.conf>, "", 4096) = 0
23094      0.000097 read(4</usr/lib64/alsa-lib/libasound_module_ctl_pulse.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20(\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000153 read(4</usr/lib64/libpulse.so.0.21.2>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000\\357\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000228 read(4</usr/lib64/pulseaudio/libpulsecommon-13.99.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\235\\1\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000121 read(4</usr/lib64/libX11-xcb.so.1.0.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0P\\20\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000115 read(4</usr/lib64/libX11.so.6.3.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p\\23\\2\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000125 read(4</usr/lib64/libxcb.so.1.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\220\\315\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000113 read(4</usr/lib64/libICE.so.6.3.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0Pa\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000117 read(4</usr/lib64/libSM.so.6.0.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260$\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000106 read(4</usr/lib64/libXtst.so.6.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260#\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000121 read(4</usr/lib64/libsystemd.so.0.28.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320B\\1\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000135 read(4</usr/lib64/libsndfile.so.1.0.28>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20\\201\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000117 read(4</usr/lib64/libasyncns.so.0.3.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p$\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000114 read(4</usr/lib64/libdbus-1.so.3.19.13>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\360\\n\\1\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000123 read(4</usr/lib64/libcap.so.2.26>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\360#\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000123 read(4</usr/lib64/libXau.so.6.0.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320\\23\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000115 read(4</usr/lib64/libuuid.so.1.3.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\20&\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000118 read(4</usr/lib64/libXext.so.6.4.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0pG\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000110 read(4</usr/lib64/libXi.so.6.1.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260$\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000121 read(4</usr/lib64/liblzma.so.5.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3609\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000129 read(4</usr/lib64/liblz4.so.1.9.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000%\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000118 read(4</usr/lib64/libgcrypt.so.20.2.5>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\300\\305\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000113 read(4</usr/lib64/libgcc_s-10-20200723.so.1>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\3605\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000141 read(4</usr/lib64/libgsm.so.1.0.18>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0p#\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000118 read(4</usr/lib64/libFLAC.so.8.3.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\260\\241\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000110 read(4</usr/lib64/libogg.so.0.8.4>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\220$\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000125 read(4</usr/lib64/libvorbis.so.0.4.8>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320K\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000122 read(4</usr/lib64/libvorbisenc.so.2.0.11>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000A\\1\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000113 read(4</usr/lib64/libresolv-2.31.so>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0000G\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.000137 read(4</usr/lib64/libgpg-error.so.0.27.0>, "\\177ELF\\2\\1\\1\\0\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\320L\\0\\0\\0\\0\\0\\0"..., 832) = 832
23094      0.002060 read(8</etc/pulse/client.conf>, "# This file is part of PulseAudi"..., 4096) = 1201
23094      0.000024 read(8</etc/pulse/client.conf>, "", 4096) = 0
23094      0.000128 read(8</dev/urandom>, "C\\200\\345\`", 4) = 4
23094      0.000132 clone(child_stack=0x7faaa57c2fb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[23097], tls=0x7faaa57c3700, child_tidptr=0x7faaa57c39d0) = 23097
23094      0.000278 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000026 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000033 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000092 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000023 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000087 read(10</home/quentin/.config/pulse/cookie>, "a\\372\\302\\315\\237_\\274h\\246L0\\3122:\\262\\247\\260\\t\\225\\344_|\\364\\346\\333g\\v\\273\\342\\4v\\327"..., 256) = 256
23097      0.000107 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000023 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000017 read(6<pipe:[145159]>, "WWWW", 10) = 4
23097      0.000019 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23097      0.000086 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000049 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000027 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000030 read(6<pipe:[145159]>, "W", 10) = 1
23097      0.000105 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000032 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000018 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000028 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000027 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000058 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000105 read(10</etc/machine-id>, "3482c01c583640d4a544cbf9485272bb"..., 4096) = 33
23097      0.000035 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000032 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000029 read(6<pipe:[145159]>, "WWWWW", 10) = 5
23097      0.000017 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23097      0.000028 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000041 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000030 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000048 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000026 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000027 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000017 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000026 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000027 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000054 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000029 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000017 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000026 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000027 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000017 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000026 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000026 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000016 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000026 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000026 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000061 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000017 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000030 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000018 read(6<pipe:[145159]>, "WWWWW", 10) = 5
23097      0.000018 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23097      0.000028 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000027 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000017 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000027 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000026 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000029 read(6<pipe:[145159]>, "WW", 10) = 2
23094      0.000059 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000039 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000021 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000039 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000036 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000039 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000020 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000028 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000060 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000022 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000040 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000037 write(5<pipe:[145158]>, "x", 1) = 1
23097      0.000040 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000040 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000039 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000029 write(5<pipe:[145158]>, "x", 1) = 1
23097      0.000033 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000053 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000039 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000047 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000037 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000039 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000044 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000047 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000049 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000039 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000039 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000045 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000049 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000038 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000043 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000037 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000038 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000045 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000049 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000045 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000037 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000038 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000049 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000055 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000029 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000020 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000039 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000045 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000037 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000042 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000047 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000039 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000044 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000037 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000038 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000042 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000047 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000043 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000044 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000021 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000038 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000044 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000048 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000020 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000046 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000053 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000051 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000030 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000040 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000023 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000039 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000042 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000055 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000038 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000046 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000038 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000031 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000048 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000049 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000038 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000042 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000038 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000041 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000048 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000038 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000042 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000037 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000042 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000049 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000043 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000045 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000019 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000038 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000042 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000047 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000042 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000037 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000042 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000047 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000045 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000037 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000019 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000042 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000046 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000029 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000029 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000020 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000038 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000041 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000037 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000041 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000066 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000018 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000037 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000041 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000037 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000020 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000028 write(8<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000019 read(6<pipe:[145159]>, "WW", 10) = 2
23097      0.000038 read(10<anon_inode:[eventfd]>, "\\1\\0\\0\\0\\0\\0\\0\\0", 8) = 8
23097      0.000042 read(6<pipe:[145159]>, 0x7faaa57c2c9e, 10) = -1 EAGAIN (Resource temporarily unavailable)
23094      0.000040 write(7<pipe:[145159]>, "W", 1) = 1
23097      0.000066 +++ exited with 0 +++
23094      0.000018 write(5<pipe:[145158]>, "x", 1) = 1
23094      0.000021 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000126 write(7<pipe:[145159]>, "W", 1) = 1
23094      0.000150 write(1<pipe:[146135]>, "Simple mixer control 'Master',0\\n"..., 245) = 245
23095      0.000018 <... read resumed>"Simple mixer control 'Master',0\\n"..., 4096) = 245
23095      0.000084 write(1<pipe:[146136]>, "90 false\\n", 9) = 9
23096      0.000018 <... read resumed>"9", 1) = 1
23096      0.000011 read(0<pipe:[146136]>, "0", 1) = 1
23096      0.000020 read(0<pipe:[146136]>, " ", 1) = 1
23096      0.000018 read(0<pipe:[146136]>, "f", 1) = 1
23096      0.000016 read(0<pipe:[146136]>, "a", 1) = 1
23096      0.000018 read(0<pipe:[146136]>, "l", 1) = 1
23096      0.000017 read(0<pipe:[146136]>,  <unfinished ...>
23094      0.000008 +++ exited with 0 +++
23096      0.000002 <... read resumed>"s", 1) = 1
23096      0.000008 read(0<pipe:[146136]>, "e", 1) = 1
23096      0.000015 read(0<pipe:[146136]>, "\\n", 1) = 1
23095      0.000024 +++ exited with 0 +++
23096      0.000053 write(1<pipe:[141020]>, "vol: ", 5 <unfinished ...>
23063      0.000022 <... read resumed>"vol: ", 128) = 5
23096      0.000014 <... write resumed>) = 5
23063      0.000010 read(4<pipe:[141020]>,  <unfinished ...>
23096      0.000041 write(1<pipe:[141020]>, "\\33[0;33m90%\\33[0m", 14 <unfinished ...>
23063      0.000014 <... read resumed>"\\33[0;33m90%\\33[0m", 128) = 14
23096      0.000004 <... write resumed>) = 14
23063      0.000003 read(4<pipe:[141020]>,  <unfinished ...>
23096      0.000102 +++ exited with 0 +++
23093      0.000059 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23094, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000139 <... read resumed>"", 128) = 0
23093      0.000003 +++ exited with 0 +++
23063      0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23093, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000235 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23098
23063      0.000108 read(4<pipe:[141044]>,  <unfinished ...>
23098      0.000301 read(0</sys/devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/device:19/PNP0C09:00/PNP0C0A:00/power_supply/BAT0/status>, "Discharging\\n", 128) = 12
23098      0.003649 read(0</sys/devices/LNXSYSTM:00/LNXSYBUS:00/PNP0A08:00/device:19/PNP0C09:00/PNP0C0A:00/power_supply/BAT0/capacity>, "84\\n", 128) = 3
23098      0.000071 write(1<pipe:[141044]>, "bat: ", 5) = 5
23063      0.000018 <... read resumed>"bat: ", 128) = 5
23063      0.000010 read(4<pipe:[141044]>,  <unfinished ...>
23098      0.000071 write(1<pipe:[141044]>, "\\33[0;32m84%\\33[0m", 14 <unfinished ...>
23063      0.000012 <... read resumed>"\\33[0;32m84%\\33[0m", 128) = 14
23098      0.000004 <... write resumed>) = 14
23063      0.000003 read(4<pipe:[141044]>, "", 128) = 0
23098      0.000087 +++ exited with 0 +++
23063      0.000002 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23098, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000206 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23099
23063      0.000086 read(4<pipe:[141045]>,  <unfinished ...>
23099      0.000219 write(1<pipe:[141045]>, "home: ", 6 <unfinished ...>
23063      0.000018 <... read resumed>"home: ", 128) = 6
23099      0.000004 <... write resumed>) = 6
23063      0.000003 read(4<pipe:[141045]>,  <unfinished ...>
23099      0.000039 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23100
23099      0.000122 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23101
23101      0.000258 read(0<pipe:[146137]>,  <unfinished ...>
23100      0.000183 execve("/usr/bin/df", ["df", "/home", "-h", "--output=used,size,pcent"], 0x55ab89de02e0 /* 93 vars */) = 0
23100      0.000262 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23100      0.000476 read(4</usr/share/locale/locale.alias>, "# Locale name alias data base.\\n#"..., 4096) = 2998
23100      0.000030 read(4</usr/share/locale/locale.alias>, "", 4096) = 0
23100      0.000155 read(4</proc/23100/mountinfo>, "23 65 0:22 / /sys rw,nosuid,node"..., 1024) = 1024
23100      0.000053 read(4</proc/23100/mountinfo>, "e rw,mode=700\\n60 23 0:31 / /sys/"..., 1024) = 1024
23100      0.000048 read(4</proc/23100/mountinfo>, "binfmt_misc rw,nosuid,nodev,noex"..., 1024) = 762
23100      0.000038 read(4</proc/23100/mountinfo>, "", 1024) = 0
23100      0.000159 write(1<pipe:[146137]>, " Used  Size Use%\\n  37G  157G  25"..., 34 <unfinished ...>
23101      0.000015 <... read resumed>" ", 1) = 1
23100      0.000004 <... write resumed>) = 34
23101      0.000003 read(0<pipe:[146137]>, "U", 1) = 1
23101      0.000017 read(0<pipe:[146137]>, "s", 1) = 1
23101      0.000017 read(0<pipe:[146137]>, "e", 1) = 1
23101      0.000014 read(0<pipe:[146137]>, "d", 1) = 1
23101      0.000017 read(0<pipe:[146137]>, " ", 1) = 1
23101      0.000017 read(0<pipe:[146137]>, " ", 1) = 1
23100      0.000015 +++ exited with 0 +++
23101      0.000003 read(0<pipe:[146137]>, "S", 1) = 1
23101      0.000019 read(0<pipe:[146137]>, "i", 1) = 1
23101      0.000017 read(0<pipe:[146137]>, "z", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "e", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, " ", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "U", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "s", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "e", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "%", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "\\n", 1) = 1
23101      0.000061 read(0<pipe:[146137]>, " ", 1) = 1
23101      0.000017 read(0<pipe:[146137]>, " ", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "3", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "7", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "G", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, " ", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, " ", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "1", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "5", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "7", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "G", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, " ", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, " ", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "2", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "5", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "%", 1) = 1
23101      0.000016 read(0<pipe:[146137]>, "\\n", 1) = 1
23101      0.000129 write(1<pipe:[141045]>, "\\33[0;37m37G/157G\\33[0m", 19 <unfinished ...>
23063      0.000019 <... read resumed>"\\33[0;37m37G/157G\\33[0m", 128) = 19
23101      0.000011 <... write resumed>) = 19
23063      0.000004 read(4<pipe:[141045]>,  <unfinished ...>
23101      0.000089 +++ exited with 0 +++
23099      0.000062 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23100, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000115 <... read resumed>"", 128) = 0
23099      0.000003 +++ exited with 0 +++
23063      0.000002 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23099, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000215 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23102
23063      0.000108 read(4<pipe:[141054]>,  <unfinished ...>
23102      0.000462 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fcb0bab2a10) = 23103
23103      0.000150 execve("/usr/bin/date", ["date", "+%H:%M:%S %d/%m/%Y"], 0x55ab89de02e0 /* 93 vars */) = 0
23103      0.000243 read(4</usr/lib64/libc-2.31.so>, "\\177ELF\\2\\1\\1\\3\\0\\0\\0\\0\\0\\0\\0\\0\\3\\0>\\0\\1\\0\\0\\0\\200q\\2\\0\\0\\0\\0\\0"..., 832) = 832
23103      0.000452 read(4</usr/share/zoneinfo/Europe/Paris>, "TZif2\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\r\\0\\0\\0\\r\\0\\0\\0\\0"..., 4096) = 2962
23103      0.000030 read(4</usr/share/zoneinfo/Europe/Paris>, "TZif2\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\r\\0\\0\\0\\r\\0\\0\\0\\0"..., 4096) = 1863
23103      0.000044 write(1<pipe:[141054]>, "15:18:23 04/10/2020\\n", 20 <unfinished ...>
23063      0.000016 <... read resumed>"15:18:23 04/10/2020\\n", 128) = 20
23103      0.000005 <... write resumed>) = 20
23063      0.000004 read(4<pipe:[141054]>,  <unfinished ...>
23103      0.000073 +++ exited with 0 +++
23102      0.000032 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23103, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000119 <... read resumed>"", 128) = 0
23102      0.000003 +++ exited with 0 +++
23063      0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=23102, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
23063      0.000172 write(1</dev/pts/1>, "MainThread: \\33[0;33m13%\\33[0m\\n", 27) = 27
23063      0.000045 write(1</dev/pts/1>, "Robert77_5G\\n", 12) = 12
23063      0.000020 write(1</dev/pts/1>, "wifi: \\33[0;32m95%\\33[0m\\n", 21) = 21
23063      0.000021 write(1</dev/pts/1>, "backlight: 60%\\n", 15) = 15
23063      0.000021 write(1</dev/pts/1>, "vol: \\33[0;33m90%\\33[0m\\n", 20) = 20
23063      0.000021 write(1</dev/pts/1>, "bat: \\33[0;32m84%\\33[0m\\n", 20) = 20
23063      0.000025 write(1</dev/pts/1>, "home: \\33[0;37m37G/157G\\33[0m\\n", 26) = 26
23063      0.000026 write(1</dev/pts/1>, "15:18:23 04/10/2020\\n", 20) = 20
23063      0.000041 read(255</home/quentin/projects/system-summary/system-summary>, "# keep above line blank\\n", 7024) = 24
23063      0.000024 read(255</home/quentin/projects/system-summary/system-summary>, "", 7024) = 0
23063      0.000135 +++ exited with 0 +++`;
