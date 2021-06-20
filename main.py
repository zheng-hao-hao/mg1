def 倒數():
    basic.clear_screen()
    basic.show_number(3)
    basic.pause(1000)
    basic.show_number(2)
    basic.pause(1000)
    basic.show_number(1)
    basic.clear_screen()
def 關卡1():
    倒數()
def 關卡3():
    倒數()
def 關卡2():
    倒數()

def on_logo_touched():
    if 關卡 == 1:
        關卡1()
    elif 關卡 == 2:
        關卡2()
    else:
        關卡3()
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

關卡 = 0
basic.show_string("MG1")
關卡 = 1
basic.show_number(關卡)

def on_forever():
    global 關卡
    if input.pin_is_pressed(TouchPin.P0):
        關卡 = 1
        basic.show_number(關卡)
    if input.pin_is_pressed(TouchPin.P1):
        關卡 = 2
        basic.show_number(關卡)
    if input.pin_is_pressed(TouchPin.P2):
        關卡 = 3
        basic.show_number(關卡)
basic.forever(on_forever)
