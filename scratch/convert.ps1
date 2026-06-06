Add-Type -AssemblyName System.Drawing
$pngPath = "c:\Users\Emotita\Desktop\Proyectos\Portafolio\public\profile-cv.png"
$jpgPath = "c:\Users\Emotita\Desktop\Proyectos\Portafolio\public\profile-cv.jpg"
$img = [System.Drawing.Image]::FromFile($pngPath)
$img.Save($jpgPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$img.Dispose()
