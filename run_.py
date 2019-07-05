import os
import subprocess

subprocess.call(['bash', '-c', 'g++ public/code.cpp'])
subprocess.call(['bash', '-c', '(time  (./a.out < public/input.txt) > public/output.txt) > public/time.txt 2>&1'])
line = open(os.getcwd( )+ "/public/time.txt", "r").readlines()[1]
open(os.getcwd( )+ "/public/output.txt", "a").write("\n-----------\ntime : " + line[7:])