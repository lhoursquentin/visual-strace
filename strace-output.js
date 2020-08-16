const straceOutput = `
     0.000000 execve("/home/quentin/.local/bin/system-summary", ["system-summary"], 0x7ffdc807a810 /* 94 vars */) = 0
     0.003913 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505533
[pid 505533]      0.000511 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505534
[pid 505534]      0.000345 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505535
[pid 505534]      0.000154 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505536
[pid 505536]      0.000615 execve("/usr/bin/sed", ["sed", "-n", "\n        /^[[:blank:]]*Name: /{\n"...], 0x55a78652f540 /* 94 vars */ <unfinished ...>
[pid 505535]      0.000042 execve("/usr/bin/bluetoothctl", ["bluetoothctl", "--", "info"], 0x55a78652f540 /* 94 vars */ <unfinished ...>
[pid 505536]      0.000130 <... execve resumed>) = 0
[pid 505535]      0.000036 <... execve resumed>) = 0
[pid 505535]      0.008213 +++ exited with 0 +++
[pid 505536]      0.000268 +++ exited with 0 +++
[pid 505534]      0.000069 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505535, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 505534]      0.000145 +++ exited with 0 +++
[pid 505533]      0.000012 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505534, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 505533]      0.000373 +++ exited with 0 +++
     0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505533, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000273 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505537
[pid 505537]      0.000371 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505538
[pid 505537]      0.000140 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505539
[pid 505538]      0.000479 execve("/home/quentin/projects/useless-scripts/new-usb", ["new-usb"], 0x55a786554220 /* 94 vars */ <unfinished ...>
[pid 505539]      0.000053 execve("/usr/bin/sed", ["sed", "-n", "\n      /.*ID [[:alnum:]]*:[[:aln"...], 0x55a786554220 /* 94 vars */ <unfinished ...>
[pid 505538]      0.000118 <... execve resumed>) = 0
[pid 505539]      0.000037 <... execve resumed>) = 0
[pid 505538]      0.002060 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f15cb498a10) = 505540
[pid 505538]      0.000135 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f15cb498a10) = 505541
[pid 505540]      0.000410 execve("/usr/bin/lsusb", ["lsusb"], 0x55bb34c1d730 /* 94 vars */ <unfinished ...>
[pid 505541]      0.000124 execve("/usr/bin/grep", ["grep", "-v", "-e", "04f3:289b", "-e", "06cb:00bd", "-e", "1d6b:0002", "-e", "1d6b:0003", "-e", "5986:2113", "-e", "8087:0026"], 0x55bb34c1d730 /* 94 vars */ <unfinished ...>
[pid 505540]      0.000019 <... execve resumed>) = 0
[pid 505541]      0.000116 <... execve resumed>) = 0
[pid 505540]      0.001506 clone(child_stack=0x7fb0b357afb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[505542], tls=0x7fb0b357b700, child_tidptr=0x7fb0b357b9d0) = 505542
[pid 505542]      0.016005 +++ exited with 0 +++
[pid 505540]      0.000195 +++ exited with 0 +++
[pid 505541]      0.000112 +++ exited with 1 +++
[pid 505538]      0.000069 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505540, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 505538]      0.000153 +++ exited with 1 +++
[pid 505539]      0.000133 +++ exited with 0 +++
[pid 505537]      0.000058 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505538, si_uid=1000, si_status=1, si_utime=0, si_stime=0} ---
[pid 505537]      0.000141 +++ exited with 0 +++
     0.000002 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505537, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000225 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505544
[pid 505544]      0.000336 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505545
[pid 505544]      0.000145 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505546
[pid 505544]      0.000168 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505547
[pid 505545]      0.000302 execve("/usr/bin/ps", ["ps", "axk", "pcpu", "o", "comm,pcpu"], 0x55a786535370 /* 94 vars */ <unfinished ...>
[pid 505546]      0.000166 execve("/usr/bin/tail", ["tail", "-n", "1"], 0x55a786535380 /* 94 vars */ <unfinished ...>
[pid 505545]      0.000010 <... execve resumed>) = 0
[pid 505546]      0.000125 <... execve resumed>) = 0
[pid 505546]      0.025203 +++ exited with 0 +++
[pid 505545]      0.000041 +++ exited with 0 +++
[pid 505547]      0.000365 +++ exited with 0 +++
[pid 505544]      0.000077 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505546, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 505544]      0.000135 +++ exited with 0 +++
     0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505544, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000239 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505548
[pid 505548]      0.000641 +++ exited with 0 +++
     0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505548, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000213 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505549
[pid 505549]      0.000347 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505550
[pid 505549]      0.000112 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505551
[pid 505550]      0.000433 execve("/usr/bin/nmcli", ["nmcli", "--get-values", "NAME", "--color", "no", "connection", "show", "--active"], 0x55a786554220 /* 94 vars */ <unfinished ...>
[pid 505551]      0.000074 execve("/usr/bin/sed", ["sed", "\n      :start\n      $!{\n        "...], 0x55a786554220 /* 94 vars */ <unfinished ...>
[pid 505550]      0.000085 <... execve resumed>) = 0
[pid 505551]      0.000056 <... execve resumed>) = 0
[pid 505550]      0.008791 clone(child_stack=0x7f784498ebb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[505552], tls=0x7f784498f700, child_tidptr=0x7f784498f9d0) = 505552
[pid 505550]      0.001042 clone(child_stack=0x7f783fffebb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[505553], tls=0x7f783ffff700, child_tidptr=0x7f783ffff9d0) = 505553
[pid 505553]      0.001087 clone(child_stack=0x7f783f7fdbb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[505554], tls=0x7f783f7fe700, child_tidptr=0x7f783f7fe9d0) = 505554
[pid 505554]      0.008277 +++ exited with 0 +++
[pid 505553]      0.000008 +++ exited with 0 +++
[pid 505552]      0.000001 +++ exited with 0 +++
[pid 505550]      0.000471 +++ exited with 0 +++
[pid 505551]      0.000212 +++ exited with 0 +++
[pid 505549]      0.000063 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505550, si_uid=1000, si_status=0, si_utime=1, si_stime=0} ---
[pid 505549]      0.000152 +++ exited with 0 +++
     0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505549, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000241 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505557
[pid 505557]      0.000650 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505558
[pid 505558]      0.000311 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505559
[pid 505558]      0.000124 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505560
[pid 505559]      0.000434 execve("/usr/sbin/iwconfig", ["iwconfig", "wlp0s20f3"], 0x55a786554220 /* 94 vars */ <unfinished ...>
[pid 505560]      0.000058 execve("/usr/bin/sed", ["sed", "-n", "s/.*Link Quality=\\([0-9]*\\)\\/\\(["...], 0x55a786554220 /* 94 vars */ <unfinished ...>
[pid 505559]      0.000102 <... execve resumed>) = 0
[pid 505560]      0.000042 <... execve resumed>) = 0
[pid 505559]      0.002248 +++ exited with 0 +++
[pid 505560]      0.000201 +++ exited with 0 +++
[pid 505558]      0.000105 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505559, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 505558]      0.000126 +++ exited with 0 +++
[pid 505557]      0.000008 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505558, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 505557]      0.000386 +++ exited with 0 +++
     0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505557, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000234 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505561
[pid 505561]      0.001853 +++ exited with 0 +++
     0.000005 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505561, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000225 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505562
[pid 505562]      0.000737 +++ exited with 0 +++
     0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505562, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000211 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505563
[pid 505563]      0.000317 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505564
[pid 505563]      0.000140 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505565
[pid 505563]      0.000158 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505566
[pid 505564]      0.000334 execve("/usr/bin/amixer", ["amixer", "get", "Master"], 0x55a786554220 /* 94 vars */ <unfinished ...>
[pid 505565]      0.000082 execve("/usr/bin/sed", ["sed", "-n", "\n      /\\[/{\n        # delete ev"...], 0x55a7865356a0 /* 94 vars */ <unfinished ...>
[pid 505564]      0.000067 <... execve resumed>) = 0
[pid 505565]      0.000077 <... execve resumed>) = 0
[pid 505564]      0.007754 clone(child_stack=0x7f8e673d5fb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[505567], tls=0x7f8e673d6700, child_tidptr=0x7f8e673d69d0) = 505567
[pid 505567]      0.007224 +++ exited with 0 +++
[pid 505564]      0.000538 +++ exited with 0 +++
[pid 505565]      0.000024 +++ exited with 0 +++
[pid 505566]      0.000167 +++ exited with 0 +++
[pid 505563]      0.000055 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505564, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 505563]      0.000141 +++ exited with 0 +++
     0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505563, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000246 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505568
[pid 505568]      0.003773 +++ exited with 0 +++
     0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505568, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000212 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505569
[pid 505569]      0.000354 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505570
[pid 505569]      0.000129 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505571
[pid 505570]      0.000438 execve("/usr/bin/df", ["df", "/home", "-h", "--output=used,size,pcent"], 0x55a786554220 /* 94 vars */) = 0
[pid 505570]      0.001293 +++ exited with 0 +++
[pid 505571]      0.000472 +++ exited with 0 +++
[pid 505569]      0.000056 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505570, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 505569]      0.000118 +++ exited with 0 +++
     0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505569, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000222 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505572
[pid 505572]      0.000594 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f826446ea10) = 505573
[pid 505573]      0.000147 execve("/usr/bin/date", ["date", "+%H:%M:%S %d/%m/%Y"], 0x55a78652f540 /* 94 vars */) = 0
[pid 505573]      0.000830 +++ exited with 0 +++
[pid 505572]      0.000034 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505573, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 505572]      0.000116 +++ exited with 0 +++
     0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=505572, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000477 +++ exited with 0 +++
`
