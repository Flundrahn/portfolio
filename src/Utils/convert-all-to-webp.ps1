# configuration
$libWebpDir = "C:\Users\frelun\Downloads\Software\libwebp-1.2.4-windows-x64"
$convertInSubDirs = $false

# functions
function Convert-Images {
    param (
        $images,
        $conversionProgram
    )

    foreach ($image in $images) {
        try {
            # output file will be written to source directory
            $output = $image.DirectoryName + "\" + $image.BaseName + ".webp"
            
            if (Test-Path $output) {
                Write-Host "Skipping $image, file already exists"
                continue
            }
            
            & $libWebpDir\bin\$conversionProgram $image.FullName -o $output
        }
        catch {
            $errors++
            Write-Host "Error while converting image $image"
        }
    }  
     
    Write-Host "Done converting batch..."
}

# program
$dir = Read-Host "Enter the image directory to convert"
$errors = 0

if ($convertInSubDirs) {
    $images = Get-ChildItem $dir -Recurse | Where-Object {$_.extension -in ".jpg", ".jpeg", ".png"}
    $gifs = Get-ChildItem $dir -Recurse -Filter *.gif
}
else {
    Get-ChildItem $dir | Where-Object {$_.extension -in ".jpg", ".jpeg", ".png"}
    $gifs = Get-ChildItem $dir -Filter *.gif
}

Convert-Images $images "cwebp.exe"
Convert-Images $gifs "gif2webp.exe"

# result
switch ($errors) {
    0 { Write-Host "Finished!" }
    1 { Write-Host "Finished, but an error occured" }
    default { Write-Host "Finished, but $errors errors occured" }
}
