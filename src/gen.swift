#!/usr/bin/swift

import AppKit

extension String {
  // Won't need this in Swift 3.1+
  subscript (r: CountableClosedRange<Int>) -> String {
    get {
      let startIndex =  self.index(self.startIndex, offsetBy: r.lowerBound)
      let endIndex = self.index(startIndex, offsetBy: r.upperBound - r.lowerBound)
      return self[startIndex...endIndex]
    }
  }
}

func hexToNSColorData(hex: String) -> Data {
  return NSKeyedArchiver.archivedData(
    withRootObject: NSColor(
      red: CGFloat(Int(hex[1...2], radix: 16)!) / 255, // Consider truncating these to see if it cuts down on output file size..
      green: CGFloat(Int(hex[3...4], radix: 16)!) / 255,
      blue: CGFloat(Int(hex[5...6], radix: 16)!) / 255,
      alpha: 1.0
    )
  )
}

let accent0 = hexToNSColorData(hex: CommandLine.arguments[1])
let accent1 = hexToNSColorData(hex: CommandLine.arguments[2])
let accent2 = hexToNSColorData(hex: CommandLine.arguments[3])
let accent3 = hexToNSColorData(hex: CommandLine.arguments[4])
let accent4 = hexToNSColorData(hex: CommandLine.arguments[5])
let accent5 = hexToNSColorData(hex: CommandLine.arguments[6])
let accent6 = hexToNSColorData(hex: CommandLine.arguments[7])
let accent7 = hexToNSColorData(hex: CommandLine.arguments[8])

let shade0 = hexToNSColorData(hex: CommandLine.arguments[9])
let shade1 = hexToNSColorData(hex: CommandLine.arguments[10])
let shade2 = hexToNSColorData(hex: CommandLine.arguments[11])
let shade3 = hexToNSColorData(hex: CommandLine.arguments[12])
let shade4 = hexToNSColorData(hex: CommandLine.arguments[13])
let shade5 = hexToNSColorData(hex: CommandLine.arguments[14])
let shade6 = hexToNSColorData(hex: CommandLine.arguments[15])
let shade7 = hexToNSColorData(hex: CommandLine.arguments[16])

let name = CommandLine.arguments[17]
let location = CommandLine.arguments[18]

let terminalTheme: [String: Any] = [
  "name": name,
  "type": "Window Settings",
  "BackgroundColor": shade0,
  "TextColor": shade6,
  "BoldTextColor": shade7,
  "CursorColor": accent6,
  "SelectionColor": accent7,
  "ANSIBlackColor": shade0,
  "ANSIRedColor": accent0,
  "ANSIGreenColor": accent3,
  "ANSIYellowColor": accent2,
  "ANSIBlueColor": accent5,
  "ANSIMagentaColor": accent7,
  "ANSICyanColor": accent4,
  "ANSIWhiteColor": shade6,
  "ANSIBrightBlackColor": shade1,
  "ANSIBrightRedColor": accent1,
  "ANSIBrightGreenColor": accent4,
  "ANSIBrightYellowColor": accent2,
  "ANSIBrightBlueColor": accent5,
  "ANSIBrightMagentaColor": accent7,
  "ANSIBrightCyanColor": accent4,
  "ANSIBrightWhiteColor": shade7,
]

NSDictionary(dictionary: terminalTheme).write(toFile: location, atomically: true)

exit(0)
