"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check, Github, Twitter } from "lucide-react"

export default function Component() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [copied, setCopied] = useState(false)

  const delinkify = (text: string) => {
    // Zero-width space character
    const zeroWidthSpace = "\u200B"

    // Regex to match URLs without protocols
    // Matches patterns like domain.com, subdomain.domain.com, etc.
    const urlRegex = /\b([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?\b/g

    return text.replace(urlRegex, (match) => {
      // Insert zero-width space after each dot in the URL
      return match.replace(/\./g, `.${zeroWidthSpace}`)
    })
  }

  const handleInputChange = (value: string) => {
    setInputText(value)
    setOutputText(delinkify(value))
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Delinkify</h1>
          <p className="text-lg text-gray-600">Remove auto-linking from URLs with zero-width spaces</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Input Text</CardTitle>
              <CardDescription>Paste your text with URLs here</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Enter text with URLs like google.com or example.org..."
                value={inputText}
                onChange={(e) => handleInputChange(e.target.value)}
                className="min-h-[300px] resize-none"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Delinkified Text
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  disabled={!outputText}
                  className="bg-white text-gray-700"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </CardTitle>
              <CardDescription>URLs with zero-width spaces after dots</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={outputText}
                readOnly
                className="min-h-[300px] resize-none bg-gray-50"
                placeholder="Delinkified text will appear here..."
              />
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-blue-900">How it works:</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Detects URLs without protocols (like google.com, not https://google.com)</li>
                <li>• Inserts zero-width space characters after dots in URLs</li>
                <li>• Prevents automatic link conversion in most platforms</li>
                <li>• Preserves all other text exactly as entered</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Example:</strong> "Visit google.com for search" becomes "Visit google.​com for search"
                  <br />
                  <span className="text-xs text-blue-600">
                    (The zero-width space is invisible but prevents linking)
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-blue-200 bg-white/50 backdrop-blur-sm rounded-lg">
          <div className="flex items-center justify-center space-x-6">
            <p className="text-gray-600">Built by chribjel</p>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/chribjel/no-links-please"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/chribjel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="X (Twitter) Profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
