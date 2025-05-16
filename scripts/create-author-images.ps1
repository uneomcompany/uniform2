cd $PSScriptRoot/../public/images/author

$authorFileNames = @(
  "عبدالله_الخالدي.jpg",
  "فاطمة_الرشيد.jpg",
  "عبدالرحمن_الدوسري.jpg",
  "mohammed-al-otaibi.png",
  "ناصر_الحربي.jpg",
  "محمد_الصالح.jpg",
  "فاطمة_الزهراني.jpg",
  "فيصل_الحربي.jpg",
  "أمينة_الزهراني.jpg",
  "أحمد_الحربي.jpg",
  "خالد_آل_سعود.jpg",
  "noura-al-khalidi.png",
  "نورة_القحطاني.jpg",
  "حسن_القحطاني.jpg",
  "عائشة_الناصر.jpg",
  "sara-al-rashidi.jpg",
  "ليلى_القحطاني.jpg",
  "أحمد_القحطاني.jpg",
  "فاطمة_العثمان.jpg",
  "فاطمة_الدوسري.jpg",
  "محمد_السعيد.jpg",
  "عمر_الحربي.jpg",
  "sara-al-qahtani.png",
  "fahad-al-anazi.png",
  "محمد_الغامدي.jpg",
  "سامي_المالكي.jpg",
  "نورة_الزهراني.jpg",
  "ليلى_السليمان.jpg",
  "خالد_العتيبي.jpg",
  "ليلى_الغامدي.jpg",
  "إبراهيم_السليمان.jpg",
  "سارة_القحطاني.jpg",
  "فيصل_الشريف.jpg",
  "فهد_المحمود.jpg",
  "نادية_آل_سعود.jpg"
)

foreach ($fileName in $authorFileNames) {
  $filePath = Join-Path $PWD $fileName
  if (-not (Test-Path $filePath)) {
    Set-Content -Path $filePath -Value "Placeholder for author image"
    Write-Host "Created $fileName"
  } else {
    Write-Host "$fileName already exists"
  }
}

cd ../authors
$expertFiles = @(
  "maritime_expert.jpeg",
  "sustainability_expert.jpeg", 
  "tech_expert.jpeg"
)

foreach ($fileName in $expertFiles) {
  $filePath = Join-Path $PWD $fileName
  if (-not (Test-Path $filePath)) {
    Set-Content -Path $filePath -Value "Placeholder for expert image"
    Write-Host "Created $fileName"
  } else {
    Write-Host "$fileName already exists"
  }
}

Write-Host "All placeholder image files have been created successfully." 