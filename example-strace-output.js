const exampleStraceOutput = `
     0.000000 execve("/home/quentin/.local/bin/system-summary", ["system-summary"], 0x7ffc1ce0a780 /* 94 vars */) = 0
     0.004037 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337008
[pid 337008]      0.000602 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337009
[pid 337009]      0.000397 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337010
[pid 337009]      0.000157 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337011
[pid 337010]      0.000547 execve("/usr/bin/bluetoothctl", ["bluetoothctl", "--", "info"], 0x563e9b0f8480 /* 94 vars */ <unfinished ...>
[pid 337011]      0.000101 execve("/usr/bin/sed", ["sed", "-n", "\\n        /^[[:blank:]]*Name: /{\\n"...], 0x563e9b0f8480 /* 94 vars */ <unfinished ...>
[pid 337010]      0.000120 <... execve resumed>) = 0
[pid 337011]      0.000052 <... execve resumed>) = 0
[pid 337010]      0.006804 +++ exited with 1 +++
[pid 337011]      0.000183 +++ exited with 0 +++
[pid 337009]      0.000065 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337010, si_uid=1000, si_status=1, si_utime=0, si_stime=0} ---
[pid 337009]      0.000141 +++ exited with 0 +++
[pid 337008]      0.000008 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337009, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 337008]      0.000253 +++ exited with 0 +++
     0.000006 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337008, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000225 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337012
[pid 337012]      0.000342 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337013
[pid 337012]      0.000137 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337014
[pid 337013]      0.000462 execve("/home/quentin/projects/useless-scripts/new-usb", ["new-usb"], 0x563e9b0fde90 /* 94 vars */ <unfinished ...>
[pid 337014]      0.000065 execve("/usr/bin/sed", ["sed", "-n", "\\n      /.*ID [[:alnum:]]*:[[:aln"...], 0x563e9b0fe3f0 /* 94 vars */ <unfinished ...>
[pid 337013]      0.000129 <... execve resumed>) = 0
[pid 337014]      0.000029 <... execve resumed>) = 0
[pid 337013]      0.002156 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f07b087ea10) = 337015
[pid 337013]      0.000129 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7f07b087ea10) = 337016
[pid 337015]      0.000413 execve("/usr/bin/lsusb", ["lsusb"], 0x560de0737670 /* 94 vars */ <unfinished ...>
[pid 337016]      0.000096 execve("/usr/bin/grep", ["grep", "-v", "-e", "04f3:289b", "-e", "06cb:00bd", "-e", "1d6b:0002", "-e", "1d6b:0003", "-e", "5986:2113", "-e", "8087:0026"], 0x560de0737670 /* 94 vars */ <unfinished ...>
[pid 337015]      0.000062 <... execve resumed>) = 0
[pid 337016]      0.000077 <... execve resumed>) = 0
[pid 337015]      0.001676 clone(child_stack=0x7f93705ebfb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[337017], tls=0x7f93705ec700, child_tidptr=0x7f93705ec9d0) = 337017
[pid 337017]      0.015597 +++ exited with 0 +++
[pid 337015]      0.000188 +++ exited with 0 +++
[pid 337016]      0.000125 +++ exited with 1 +++
[pid 337013]      0.000072 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337015, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 337013]      0.000177 +++ exited with 1 +++
[pid 337014]      0.000156 +++ exited with 0 +++
[pid 337012]      0.000058 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337013, si_uid=1000, si_status=1, si_utime=0, si_stime=0} ---
[pid 337012]      0.000151 +++ exited with 0 +++
     0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337012, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000260 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337018
[pid 337018]      0.000332 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337019
[pid 337018]      0.000154 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337020
[pid 337018]      0.000160 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337021
[pid 337019]      0.000396 execve("/usr/bin/ps", ["ps", "axk", "pcpu", "o", "comm,pcpu"], 0x563e9b11d460 /* 94 vars */ <unfinished ...>
[pid 337020]      0.000071 execve("/usr/bin/tail", ["tail", "-n", "1"], 0x563e9b0feeb0 /* 94 vars */ <unfinished ...>
[pid 337019]      0.000106 <... execve resumed>) = 0
[pid 337020]      0.000054 <... execve resumed>) = 0
[pid 337020]      0.023705 +++ exited with 0 +++
[pid 337019]      0.000023 +++ exited with 0 +++
[pid 337021]      0.000502 +++ exited with 0 +++
[pid 337018]      0.000106 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337020, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 337018]      0.000151 +++ exited with 0 +++
     0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337018, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000246 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337022
[pid 337022]      0.000503 +++ exited with 1 +++
     0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337022, si_uid=1000, si_status=1, si_utime=0, si_stime=0} ---
     0.000187 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337023
[pid 337023]      0.000410 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337024
[pid 337023]      0.000124 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337025
[pid 337024]      0.000411 execve("/usr/bin/nmcli", ["nmcli", "--get-values", "NAME", "--color", "no", "connection", "show", "--active"], 0x563e9b11d460 /* 94 vars */ <unfinished ...>
[pid 337025]      0.000122 execve("/usr/bin/sed", ["sed", "\\n      :start\\n      $!{\\n        "...], 0x563e9b11d460 /* 94 vars */ <unfinished ...>
[pid 337024]      0.000046 <... execve resumed>) = 0
[pid 337025]      0.000090 <... execve resumed>) = 0
[pid 337024]      0.009013 clone(child_stack=0x7f597cf25bb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[337026], tls=0x7f597cf26700, child_tidptr=0x7f597cf269d0) = 337026
[pid 337024]      0.001003 clone(child_stack=0x7f5977ffebb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[337027], tls=0x7f5977fff700, child_tidptr=0x7f5977fff9d0) = 337027
[pid 337027]      0.001221 clone(child_stack=0x7f59777fdbb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[337028], tls=0x7f59777fe700, child_tidptr=0x7f59777fe9d0) = 337028
[pid 337028]      0.007686 +++ exited with 0 +++
[pid 337027]      0.000009 +++ exited with 0 +++
[pid 337026]      0.000005 +++ exited with 0 +++
[pid 337024]      0.000453 +++ exited with 0 +++
[pid 337025]      0.000183 +++ exited with 0 +++
[pid 337023]      0.000067 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337024, si_uid=1000, si_status=0, si_utime=0, si_stime=1} ---
[pid 337023]      0.000167 +++ exited with 0 +++
     0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337023, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000245 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337031
[pid 337031]      0.000679 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337032
[pid 337032]      0.000303 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337033
[pid 337032]      0.000124 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337034
[pid 337033]      0.000446 execve("/usr/sbin/iwconfig", ["iwconfig", "wlp0s20f3"], 0x563e9b11d460 /* 94 vars */ <unfinished ...>
[pid 337034]      0.000067 execve("/usr/bin/sed", ["sed", "-n", "s/.*Link Quality=\\\\([0-9]*\\\\)\\\\/\\\\(["...], 0x563e9b11d460 /* 94 vars */ <unfinished ...>
[pid 337033]      0.000084 <... execve resumed>) = 0
[pid 337034]      0.000067 <... execve resumed>) = 0
[pid 337033]      0.002402 +++ exited with 0 +++
[pid 337034]      0.000234 +++ exited with 0 +++
[pid 337032]      0.000077 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337033, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 337032]      0.000159 +++ exited with 0 +++
[pid 337031]      0.000012 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337032, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 337031]      0.000422 +++ exited with 0 +++
     0.000005 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337031, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000390 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337035
[pid 337035]      0.001811 +++ exited with 0 +++
     0.000006 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337035, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000219 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337036
[pid 337036]      0.000714 +++ exited with 0 +++
     0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337036, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000221 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337037
[pid 337037]      0.000305 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337038
[pid 337037]      0.000127 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337039
[pid 337037]      0.000151 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337040
[pid 337038]      0.000347 execve("/usr/bin/amixer", ["amixer", "get", "Master"], 0x563e9b11d460 /* 94 vars */ <unfinished ...>
[pid 337039]      0.000120 execve("/usr/bin/sed", ["sed", "-n", "\\n      /\\\\[/{\\n        # delete ev"...], 0x563e9b0feda0 /* 94 vars */ <unfinished ...>
[pid 337038]      0.000032 <... execve resumed>) = 0
[pid 337039]      0.000104 <... execve resumed>) = 0
[pid 337038]      0.007866 clone(child_stack=0x7f943f8f6fb0, flags=CLONE_VM|CLONE_FS|CLONE_FILES|CLONE_SIGHAND|CLONE_THREAD|CLONE_SYSVSEM|CLONE_SETTLS|CLONE_PARENT_SETTID|CLONE_CHILD_CLEARTID, parent_tid=[337041], tls=0x7f943f8f7700, child_tidptr=0x7f943f8f79d0) = 337041
[pid 337041]      0.006968 +++ exited with 0 +++
[pid 337038]      0.000491 +++ exited with 0 +++
[pid 337039]      0.000030 +++ exited with 0 +++
[pid 337040]      0.000175 +++ exited with 0 +++
[pid 337037]      0.000055 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337038, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 337037]      0.000148 +++ exited with 0 +++
     0.000004 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337037, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000238 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337042
[pid 337042]      0.003992 +++ exited with 0 +++
     0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337042, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000218 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337043
[pid 337043]      0.000349 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337044
[pid 337043]      0.000115 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337045
[pid 337044]      0.000440 execve("/usr/bin/df", ["df", "/home", "-h", "--output=used,size,pcent"], 0x563e9b11d460 /* 94 vars */) = 0
[pid 337044]      0.001340 +++ exited with 0 +++
[pid 337045]      0.000508 +++ exited with 0 +++
[pid 337043]      0.000058 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337044, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 337043]      0.000125 +++ exited with 0 +++
     0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337043, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000223 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337046
[pid 337046]      0.000598 clone(child_stack=NULL, flags=CLONE_CHILD_CLEARTID|CLONE_CHILD_SETTID|SIGCHLD, child_tidptr=0x7fab0597ea10) = 337047
[pid 337047]      0.000153 execve("/usr/bin/date", ["date", "+%H:%M:%S %d/%m/%Y"], 0x563e9b0f8480 /* 94 vars */) = 0
[pid 337047]      0.000854 +++ exited with 0 +++
[pid 337046]      0.000030 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337047, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
[pid 337046]      0.000113 +++ exited with 0 +++
     0.000003 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=337046, si_uid=1000, si_status=0, si_utime=0, si_stime=0} ---
     0.000451 +++ exited with 0 +++
`
